"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_dealer_dashboard_payment_payment_module_ts"],{

/***/ 73553:
/*!***************************************************************************!*\
  !*** ./src/app/dealer/dashboard/payment/component/card/card.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);


const _c0 = function (a0) { return { color: a0 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { item: "item" }, decls: 14, vars: 9, consts: [[1, "cardContent", "mb-2", "rounded"], [1, "card-bodyContent"], [1, "card-title"], [3, "ngStyle"], [1, "card-descriptrion", "mb-2"], [1, "card-free", 3, "ngStyle"], [2, "color", "white", "font-size", "16px"], [1, "card-content"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mi\u1EC5n ph\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.item.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.descriptrion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.item.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".cardContent[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 12px !important;\n  height: 340px;\n  box-shadow: 1px 1px 2px #00000029;\n  background-color: #FFFFFF;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 20px;\n  display: flex;\n  align-items: initial;\n  justify-content: center;\n  margin-top: 2rem;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-weight: 900;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .card-descriptrion[_ngcontent-%COMP%] {\n  margin-top: 2.1rem;\n  color: #8E8E93;\n  text-align: center;\n  white-space: pre;\n  font-size: 0.75rem;\n  font-weight: lighter;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .card-free[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #FFFFFF;\n  height: 40px;\n  font-size: large;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 8px;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  margin: 20px 5px 0px;\n  height: 118px;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: small;\n  text-align: center;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00a859;\n  border-color: #00a859;\n  background-color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNaO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNaO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ1o7QUFDUTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtBQUNaO0FBQVk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBRWhCO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDWjtBQUFZO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFFaEIiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkQ29udGVudCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHghaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4ICMwMDAwMDAyOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAuY2FyZC1ib2R5Q29udGVudCB7XHJcbiAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWRlc2NyaXB0cmlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuMXJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM4RThFOTM7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtZnJlZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggNXB4IDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMThweDtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMTY4LCA4OSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYigwLCAxNjgsIDg5KTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 31259:
/*!*****************************************************************************************************!*\
  !*** ./src/app/dealer/dashboard/payment/component/extended-features/extended-features.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtendedFeaturesComponent": () => (/* binding */ ExtendedFeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/card.component */ 73553);




function ExtendedFeaturesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r1);
} }
class ExtendedFeaturesComponent {
    constructor() {
        this.cards = [
            {
                color: '#D2B602',
                title: 'Quản lý hoá đơn, biên nhận bảo hành sửa chữa',
                descriptrion: 'Báo giá và biên nhận',
                content: 'Tạo báo giá và biên nhận khi nhận hiện vật từ khách hàng. Chọn ngày hẹn, ngày nhắc hẹn và ngày xuất hóa đơn bảo hành.',
            },
            {
                color: '#95B802',
                title: 'Kết nối nhà vận chuyển GHN, GHTK, Ahamove...',
                descriptrion: 'Nắm bắt tình hình giao hàng',
                content: 'Theo dõi quy trình vận đơn của các bên vận chuyển, cho phép tạo và hủy đơn vận chuyển sau khi bán hàng. Hợp tác với các bên vận chuyển Ahamove, GHTK, GHN..',
            },
            {
                color: '#9D47FF',
                title: 'Quản lý chi nhánh cửa hàng',
                descriptrion: 'Kiểm tra chuỗi cửa hàng hoạt động',
                content: 'Quản lý hoạt động nhiều chi nhánh, chuyển tiền và hàng hóa qua lại giữa các chi nhánh, ngoài ra có thể sắp xếp nhân viên làm việc ở 02 chi nhánh trở lên.',
            },
            {
                color: '#149CFC',
                title: 'Quản lý đơn trên sàn TMĐT Lazada, Shopee, Tiki & Sendo',
                descriptrion: 'Theo dõi và quản lý đơn trên các sàn',
                content: 'Xem các trạng thái hiện tại của đơn hàng, đơn hàng bị khiếu nại…, đối soát hàng hóa giao cho vận chuyển và đối soát số tiền các đơn đã hoàn tất, đồng thời cập nhật giá bán và số lượng tồn kho sản phẩm trên sàn.',
            },
            {
                color: '#FF7F27',
                title: 'Tự động bán hàng trên TMĐT',
                descriptrion: 'Thay đối giá bán tự động và so sánh giá',
                content: 'Hệ thống tự động thay đối giá bán các sản phẩm trên sàn, đồng thời hiển thị bảng so sánh giá các sản phẩm tương ứng từ các gian hàng khác.',
            },
            {
                color: '#00A859',
                title: 'Tính năng kiểm kho phù hợp cho mọi loại hình kinh doanh',
                descriptrion: 'Kiểm kho trong lúc bán hàng',
                content: 'Với tính năng này, người bán có thể kiểm kho bất kỳ lúc nào kể cả khi bán hàng. Ngoài ra, phần mềm còn cho phép nhiều người kiểm trong cùng một thời điểm.',
            },
            {
                color: '#E96B9F',
                title: 'Thiết kế và in ấn voucher, coupon, tem sản phẩm...',
                descriptrion: 'Thiết kế tem, voucher, phiếu thanh toán',
                content: 'Mỗi cửa hàng tự thiết kế cho mình mẫu tem sản phẩm, phiếu thanh toán, voucher, hay thẻ mua hàng riêng biệt. Cửa hàng chỉ cần đáp ứng có thiết bị để in là được.',
            },
            {
                color: '#1184C2',
                title: 'Chat đa sàn',
                descriptrion: 'Giao tiếp khách hàng nhanh nhất có thể',
                content: 'Với tính năng chat đa sàn, cửa hàng có nhiều gian hàng trên sàn không còn phải chuyển qua chuyển lại giữa các tab của trình duyệt, thay vào đó chỉ với một ứng dụng duy nhất là có thể chat nhiều sàn cùng lúc với khách hàng.',
            },
            {
                color: '#FE1414',
                title: 'Đối soát dòng tiền',
                descriptrion: 'Quản lý dễ dàng thu, chi và công nợ',
                content: 'Hệ thống tự động cập nhật việc thu, chi hay công nợ khi phát sinh giao dịch. Và toàn bộ dữ liệu cho việc thu, chi, công nợ,… được phản ánh cụ thể qua các báo cáo định kỳ mà do người dùng áp đặt.',
            },
            {
                color: '#04ACAC',
                title: 'Quản lý thông tin và phân quyền nhân viên',
                descriptrion: 'Quản lý và phân quyền vai trò nhân viên',
                content: 'Thông tin cá nhân của từng nhân viên được thiết lập chặt chẽ và bảo mật. Cũng như việc phân quyền dựa trên chức danh và vai trò mà chỉ có nhân viên đó và người tạo mới có thể quản lý được.',
            },
            {
                color: '#B90046',
                title: 'In tem hàng loạt',
                descriptrion: 'Giúp người bán tiết kiệm thời gian',
                content: 'Hỗ trợ người bán in tem sản phẩm nhanh nhất có thể. Linh hoạt chuyển đổi qua lại giữa các mẫu tem với nhau. Không cần đòi hỏi nghiệp vụ hay chuyên môn vẫn có thể in một cách nhanh chóng.',
            },
            {
                color: '#2D09A4',
                title: 'Giao diện bán hàng đa dạng, phong phú',
                descriptrion: 'Đáp ứng cho nhiều ngành hàng',
                content: 'Phần mềm cung cấp nhiều giao diện bán hàng, giúp người bán kinh doanh dễ dàng hơn khi một ngành hàng áp dụng được nhiều giao diện mà không bị thiếu tính năng hay thao tác.',
            },
            {
                color: '#AE001A',
                title: 'Chiết khấu cho khách hàng',
                descriptrion: 'Đa dạng chiết khấu',
                content: 'Tích hợp tính năng chiết khấu thúc đẩy việc bán hàng với số lượng lớn. Có 2 loại chiết khấu gồm chiết khấu theo doanh số khách hàng hoặc chiết khấu theo hóa đơn, trong mỗi chiết khấu người bán định mức chiết khấu dựa trên mức cuối hoặc theo từng mức với khách hàng.',
            },
            {
                color: '#026C88',
                title: 'Voucher (Phiếu quà tặng)',
                descriptrion: 'Cơ hội tiếp cận nhiều khách hàng',
                content: 'Cửa hàng có cơ hội tiếp cận nhiều khách hàng hơn khi tạo ra nhiều Voucher (phiếu quà tặng). Giúp cửa hàng có thêm doanh thu từ việc bán Voucher khi khách hàng mua hoặc đổi điểm để sử dụng.',
            },
            {
                color: '#9B5F3A',
                title: 'Điểm tích lũy',
                descriptrion: 'Điểm càng cao càng hấp dẫn người mua',
                content: 'Chương trình tích điểm kết hợp với nhiều chương trình khác nhau tạo nên sự hấp dẫn và phong phú khi khách có thể sử dụng điểm để thanh toán mua hàng, đổi điểm lấy Voucher (Phiếu quà tặng) hay Coupon (Phiếu thanh toán).',
            },
            {
                color: '#777777',
                title: 'Coupon (Phiếu thanh toán)',
                descriptrion: 'Thúc đẩy việc bán hàng',
                content: 'Khách hàng sử dụng Coupon để thanh toán thay vì trả tiền đã không còn xa lạ, tuy nhiên với Sales Viethas thì quy trình tạo, phát hành và áp dụng đơn giản hơn so với những phần mềm khác',
            },
        ];
    }
    ngOnInit() {
    }
}
ExtendedFeaturesComponent.ɵfac = function ExtendedFeaturesComponent_Factory(t) { return new (t || ExtendedFeaturesComponent)(); };
ExtendedFeaturesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExtendedFeaturesComponent, selectors: [["app-extended-features"]], decls: 2, vars: 1, consts: [["nz-row", "", 1, "ant-table-body"], ["nz-col", "", "nzSpan", "6", "class", "item", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "6", 1, "item"], [3, "item"]], template: function ExtendedFeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExtendedFeaturesComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, _card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent], styles: [".ant-table-body[_ngcontent-%COMP%] {\n  margin: 16px 56px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 0px 8px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVuZGVkLWZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjtBQUFJO0VBQ0kscUJBQUE7QUFFUiIsImZpbGUiOiJleHRlbmRlZC1mZWF0dXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbnQtdGFibGUtYm9keSB7XHJcbiAgICBtYXJnaW46IDE2cHggNTZweDtcclxuICAgIC5pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggOHB4IDE2cHhcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 77162:
/*!*********************************************************************************!*\
  !*** ./src/app/dealer/dashboard/payment/component/package/package.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageComponent": () => (/* binding */ PackageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);






function PackageComponent_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemChild_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", itemChild_r3.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", itemChild_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](itemChild_r3.title_features_list);
} }
const _c0 = function (a0) { return { color: a0 }; };
const _c1 = function (a0) { return { background: a0 }; };
function PackageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PackageComponent_div_1_div_19_Template, 5, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PackageComponent_div_1_Template_button_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const item_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.gotoPaymentDetail(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Thanh to\u00E1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, item_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 7, item_r1.price, "1.0-0") + " \u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 10, item_r1.price_discount, "1.0-0") + " \u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r1.features_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c1, item_r1.color));
} }
class PackageComponent {
    constructor(router, vhQuerySales, vhComponent) {
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.vhComponent = vhComponent;
        this.data = [
            {
                id: 'dealer_main_package_standard_12month',
                color: '#3FA4EB',
                title: 'Gói 1 năm STANDARD',
                price: 1980000,
                price_discount: 980000,
                duration: '1 năm',
                branch: '',
                value: 1,
                unit: 'năm',
                quantity: 1,
                features_list: [
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Không phí khởi tạo'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Miễn phí hướng dẫn sử dụng online (ultraview, zalo)'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Không giới hạn tính năng'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Kết nối nhà vận chuyển'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý bảo hành, sửa chữa'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý nhiều chi nhánh'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Bán hàng tại cửa hàng'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Bán hàng đa kênh (Shopee, Sendo, Tiki, Lazada, Tiktok..)'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "red",
                        title_features_list: 'Xuất hóa đơn thuế tự động'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Ứng dụng chat đa sàn TMĐT'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Đa dạng giao diện bán hàng cho từng ngành nghề'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Tạo nhiều chương trình khuyến mãi voucher, coupon, paymentcard'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý khách thành viên, VIP...'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý hàng hóa theo kích cỡ, theo thuộc tính, theo lô..'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý tồn kho, doanh thu, lợi nhuận...'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý công nợ, chiết khấu khách hàng, hoa hồng nhân viên'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "green",
                        title_features_list: '3 tài khoản truy cập (1 user boss, 2 user nhân viên)'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Hỗ trợ kỹ thuật qua tổng đài'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "green",
                        title_features_list: 'Phát sinh trong tháng 2000 đơn'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "red",
                        title_features_list: 'Tặng thiết kế website miễn phí'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "green",
                        title_features_list: '3 sàn thương mại điện tử'
                    },
                ]
            },
            {
                id: 'dealer_main_package_pro_12month',
                color: '#3FA4EB',
                title: 'Gói 1 năm PRO',
                price: 2940000,
                price_discount: 1840000,
                duration: '1 năm',
                branch: '',
                value: 1,
                unit: 'năm',
                quantity: 1,
                features_list: [
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Không phí khởi tạo'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Miễn phí hướng dẫn sử dụng online (ultraview, zalo)'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Không giới hạn tính năng'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Kết nối nhà vận chuyển'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý bảo hành, sửa chữa'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý nhiều chi nhánh'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Bán hàng tại cửa hàng'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Bán hàng đa kênh (Shopee, Sendo, Tiki, Lazada, Tiktok..)'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "red",
                        title_features_list: 'Xuất hóa đơn thuế tự động'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Ứng dụng chat đa sàn TMĐT'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Đa dạng giao diện bán hàng cho từng ngành nghề'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Tạo nhiều chương trình khuyến mãi voucher, coupon, paymentcard'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý khách thành viên, VIP...'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý hàng hóa theo kích cỡ, theo thuộc tính, theo lô..'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý tồn kho, doanh thu, lợi nhuận...'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý công nợ, chiết khấu khách hàng, hoa hồng nhân viên'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "green",
                        title_features_list: '6 tài khoản truy cập (1 user boss, 5 user nhân viên)'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Hỗ trợ kỹ thuật qua tổng đài'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "green",
                        title_features_list: 'Phát sinh trong tháng 5000 đơn'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "red",
                        title_features_list: 'Tặng thiết kế website miễn phí'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "green",
                        title_features_list: '6 sàn thương mại điện tử'
                    },
                ]
            },
            {
                id: 'dealer_main_package_super_pro_12month',
                color: '#3FA4EB',
                title: 'Gói 1 năm SUPER-PRO',
                price: 3960000,
                price_discount: 2760000,
                duration: '1 năm',
                branch: '',
                value: 1,
                unit: 'năm',
                quantity: 1,
                features_list: [
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Không phí khởi tạo'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Miễn phí hướng dẫn sử dụng online (ultraview, zalo)'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Không giới hạn tính năng'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Kết nối nhà vận chuyển'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý bảo hành, sửa chữa'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý nhiều chi nhánh'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Bán hàng tại cửa hàng'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Bán hàng đa kênh (Shopee, Sendo, Tiki, Lazada, Tiktok..)'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "red",
                        title_features_list: 'Xuất hóa đơn thuế tự động'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Ứng dụng chat đa sàn TMĐT'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Đa dạng giao diện bán hàng cho từng ngành nghề'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Tạo nhiều chương trình khuyến mãi voucher, coupon, paymentcard'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý khách thành viên, VIP...'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý hàng hóa theo kích cỡ, theo thuộc tính, theo lô..'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý tồn kho, doanh thu, lợi nhuận...'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý công nợ, chiết khấu khách hàng, hoa hồng nhân viên'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "green",
                        title_features_list: '10 tài khoản truy cập (1 user boss, 9 user nhân viên)'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Hỗ trợ kỹ thuật qua tổng đài'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "green",
                        title_features_list: 'Phát sinh trong tháng 20000 đơn'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "red",
                        title_features_list: 'Tặng thiết kế website miễn phí'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        color: "green",
                        title_features_list: '10 sàn thương mại điện tử'
                    },
                ]
            },
        ];
    }
    ngOnInit() {
        Promise.all([
            this.vhQuerySales.getPackage('dealer_main_package_standard_12month'),
            this.vhQuerySales.getPackage('dealer_main_package_pro_12month'),
            this.vhQuerySales.getPackage('dealer_main_package_super_pro_12month'),
        ]).then(([dealer_main_package_standard_12month, dealer_main_package_pro_12month, dealer_main_package_super_pro_12month]) => {
            // console.log('dealer_main_package_startup_12month', dealer_main_package_startup_12month);
            // console.log('dealer_main_package_standard_12month', dealer_main_package_standard_12month);
            // console.log('dealer_main_package_pro_12month', dealer_main_package_pro_12month);
            // console.log('dealer_main_package_super_pro_12month', dealer_main_package_super_pro_12month);
            // gán lại giá theo gói đã lấy từ server
            this.data[0].price_discount = dealer_main_package_standard_12month.selling_price;
            this.data[0].price = dealer_main_package_standard_12month.original_price;
            this.data[1].price_discount = dealer_main_package_pro_12month.selling_price;
            this.data[1].price = dealer_main_package_pro_12month.original_price;
            this.data[2].price_discount = dealer_main_package_super_pro_12month.selling_price;
            this.data[2].price = dealer_main_package_super_pro_12month.original_price;
        });
    }
    gotoPaymentDetail(item) {
        // let branchNow = this.vhQuerySales.getDefaultBranch();
        // item.branch = branchNow._id;
        this.vhComponent.showLoading("");
        this.router.navigate(['/dealer/dashboard/payment/detail'], { state: item.id });
    }
}
PackageComponent.ɵfac = function PackageComponent_Factory(t) { return new (t || PackageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent)); };
PackageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PackageComponent, selectors: [["app-package"]], decls: 2, vars: 1, consts: [["nz-row", "", 1, "ant-table-body"], ["nz-col", "", "nzSpan", "12", "class", "layout_item", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "12", 1, "layout_item"], [1, "item"], [1, "title", 3, "ngStyle"], [1, "price"], [1, "price_discount"], [1, "number"], [1, "charater"], [1, "content"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12", "class", "feature", 4, "ngFor", "ngForOf"], [1, "button"], [3, "ngStyle", "click"], ["nz-col", "", "nzSpan", "12", 1, "feature"], ["id", "feature_item"], [3, "src"], [2, "text-align", "justify"]], template: function PackageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PackageComponent_div_1_Template, 23, 17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: [".ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  box-shadow: 2px 4px 8px #888888;\n  margin: 0px 46px 16px;\n  border-radius: 16px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  justify-items: center;\n  align-items: end;\n  justify-content: center;\n  text-align: center;\n  padding-top: 16px;\n  letter-spacing: -1px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 4px;\n  text-decoration: line-through;\n  color: #8E8E8E;\n  font-size: 1.2rem;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .price_discount[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .price_discount[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  color: #00A859;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .price_discount[_ngcontent-%COMP%]   .charater[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #8E8E8E;\n  border: 1px solid;\n  width: 5rem;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 16px 24px 0px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #feature_item[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  padding-right: 8px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #feature_item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 9%;\n  width: 24px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #feature_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 91%;\n  white-space: normal;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 0px 32px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 130px;\n  height: 40px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJRO0VBQ0ksK0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBeEJaO0FBeUJZO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQXZCaEI7QUF5Qlk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXZCaEI7QUF5Qlk7RUFDSSxrQkFBQTtBQXZCaEI7QUF3QmdCO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF0QnBCO0FBd0JnQjtFQUNJLGlCQUFBO0FBdEJwQjtBQXlCWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQXZCaEI7QUF5Qlk7RUFDSSxxQkFBQTtBQXZCaEI7QUF3QmdCO0VBQ0ksYUFBQTtBQXRCcEI7QUF5QmdCO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBdkJwQjtBQXdCb0I7RUFDSSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBdEJ4QjtBQXdCb0I7RUFDSSxVQUFBO0VBRUEsbUJBQUE7QUF2QnhCO0FBMkJZO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQXpCaEI7QUEwQmdCO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXhCcEIiLCJmaWxlIjoicGFja2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbnQtdGFibGUtYm9keSB7XHJcbiAgICAubGF5b3V0X2l0ZW0ge1xyXG4gICAgICAgIC8vICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIC8vICAgICAuaXRlbSB7XHJcbiAgICAgICAgLy8gICAgICAgICB3aWR0aDogNzMlO1xyXG4gICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgLy8gICAgICAgICAudGl0bGUge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIG1hcmdpbjogMTZweCAwcHggMHB4IDIwcHg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgI2ZlYXR1cmVfaXRlbSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMHB4IDIycHg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA0cHggOHB4ICM4ODg4ODg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDQ2cHggMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOEU4RThFO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByaWNlX2Rpc2NvdW50IHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5udW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBBODU5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNoYXJhdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzhFOEU4RTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDI0cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgLmZlYXR1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjZmVhdHVyZV9pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkxJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwcHggMzJweDtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 32964:
/*!*********************************************************************************************!*\
  !*** ./src/app/dealer/dashboard/payment/component/popup-package/popup-package.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupPackageComponent": () => (/* binding */ PopupPackageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);





function PopupPackageComponent_ng_container_1_div_2_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemChild_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", itemChild_r4.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemChild_r4.title_features_list);
} }
const _c0 = function (a0) { return { color: a0 }; };
const _c1 = function (a0) { return { background: a0 }; };
function PopupPackageComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PopupPackageComponent_ng_container_1_div_2_div_19_Template, 5, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPackageComponent_ng_container_1_div_2_Template_button_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.addPackage(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Th\u00EAm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, item_r2.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, item_r2.price, "1.0-0") + " \u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 10, item_r2.price_discount, "1.0-0") + " \u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.features_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, item_r2.color));
} }
function PopupPackageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopupPackageComponent_ng_container_1_div_2_Template, 23, 17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data);
} }
class PopupPackageComponent {
    constructor() {
        this.data = [
            {
                id: 1,
                color: '#FEC007',
                title: 'Gói theo tháng',
                price: 275000,
                price_discount: 99000,
                duration: '01 tháng sử dụng',
                branch: '',
                value: 1,
                unit: 'tháng',
                quantity: 1,
                features_list: [
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Không giới hạn tính năng'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Bán hàng đa kênh'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý đơn vận chuyển'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Ứng dụng chat đa sàn'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Bảo hành, sửa chữa'
                    }, {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Đa dạng giao diện bán hàng'
                    },
                ]
            },
            {
                id: 2,
                color: '#2195F2',
                title: 'Gói theo năm',
                price: 3300000,
                price_discount: 990000,
                duration: '01 năm sử dụng',
                branch: '',
                value: 1,
                unit: 'năm',
                quantity: 1,
                features_list: [
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Không giới hạn tính năng'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Bán hàng đa kênh'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Quản lý đơn vận chuyển'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Ứng dụng chat đa sàn'
                    },
                    {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Bảo hành, sửa chữa'
                    }, {
                        icon: 'assets/img/tick.svg',
                        title_features_list: 'Đa dạng giao diện bán hàng'
                    },
                ]
            },
        ];
        this.addPackageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        // @Output() status:EventEmitter<Boolean>;
        this.isVisible = true;
    }
    showModal() {
        this.isVisible = true;
    }
    handleOk() {
        this.isVisible = false;
    }
    handleCancel() {
        this.isVisible = false;
    }
    ngOnInit() {
    }
    addPackage(item) {
        this.isVisible = false;
        this.addPackageEvent.emit(item);
    }
}
PopupPackageComponent.ɵfac = function PopupPackageComponent_Factory(t) { return new (t || PopupPackageComponent)(); };
PopupPackageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupPackageComponent, selectors: [["app-popup-package"]], outputs: { addPackageEvent: "addPackageEvent" }, decls: 2, vars: 2, consts: [["nzWidth", "1200px", "nzTitle", "L\u1EF1a ch\u1ECDn g\u00F3i", 3, "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "12"], [1, "item"], [1, "title", 3, "ngStyle"], [1, "price"], [1, "price_discount"], [1, "number"], [1, "charater"], [1, "content"], [1, "button"], [3, "ngStyle", "click"], ["id", "feature_item"], [3, "src"]], template: function PopupPackageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function PopupPackageComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function PopupPackageComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.handleCancel(); })("nzOnOk", function PopupPackageComponent_Template_nz_modal_nzOnOk_0_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopupPackageComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzFooter", null);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__.NzModalContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe], styles: [".item[_ngcontent-%COMP%] {\n  box-shadow: 2px 4px 8px #888888;\n  margin: 0px 46px;\n  border-radius: 16px;\n}\n.item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  justify-items: center;\n  align-items: end;\n  justify-content: center;\n  text-align: center;\n  padding-top: 16px;\n  letter-spacing: -1px;\n}\n.item[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 4px;\n  text-decoration: line-through;\n  color: #8E8E8E;\n}\n.item[_ngcontent-%COMP%]   .price_discount[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.item[_ngcontent-%COMP%]   .price_discount[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  color: #00A859;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.item[_ngcontent-%COMP%]   .price_discount[_ngcontent-%COMP%]   .charater[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.item[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #8E8E8E;\n  border: 1px solid;\n  width: 5rem;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 16px 24px 0px;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #feature_item[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin-bottom: 8px;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #feature_item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 9%;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #feature_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n.item[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 0px 32px;\n}\n.item[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 130px;\n  height: 40px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLXBhY2thZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQURRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFHWjtBQURRO0VBQ0ksaUJBQUE7QUFHWjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRVI7QUFBSTtFQUNJLHFCQUFBO0FBRVI7QUFEUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUZZO0VBQ0ksaUJBQUE7RUFDQSxTQUFBO0FBSWhCO0FBRlk7RUFDSSxtQkFBQTtBQUloQjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR1oiLCJmaWxlIjoicG9wdXAtcGFja2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggOHB4ICM4ODg4ODg7XHJcbiAgICBtYXJnaW46IDBweCA0NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgfVxyXG4gICAgLnByaWNlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgIGNvbG9yOiAjOEU4RThFO1xyXG4gICAgfVxyXG4gICAgLnByaWNlX2Rpc2NvdW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLm51bWJlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDBBODU5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGFyYXRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICM4RThFOEU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IDI0cHggMHB4O1xyXG4gICAgICAgICNmZWF0dXJlX2l0ZW0ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5JVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idXR0b24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDBweCAzMnB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 55387:
/*!***************************************************************************************************!*\
  !*** ./src/app/dealer/dashboard/payment/component/qr-banking-modal/qr-banking-modal.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrBankingModalComponent": () => (/* binding */ QrBankingModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/spin */ 80289);








function QrBankingModalComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.urlImg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function QrBankingModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nz-spin", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function QrBankingModalComponent_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QrBankingModalComponent_ng_container_9_ng_container_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const bank_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.handleClick(bank_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bank_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, bank_r5.account_no == ctx_r4.bank_active.account_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", bank_r5.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", bank_r5.shortName);
} }
function QrBankingModalComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QrBankingModalComponent_ng_container_9_ng_container_1_Template, 3, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.bankAccounts);
} }
function QrBankingModalComponent_nz_spin_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-spin", 10);
} }
class QrBankingModalComponent {
    constructor(vhQuerySales, vhQueryDealer, vhComponent, languageService, router, nzModalService) {
        this.vhQuerySales = vhQuerySales;
        this.vhQueryDealer = vhQueryDealer;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.router = router;
        this.nzModalService = nzModalService;
        this.total = 5000;
        this.id_payment = '';
        this.banks = [];
        this.urlImg = 'https://img.vietqr.io/image/<BANK_ID>-<ACCOUNT_NO>-<TEMPLATE>.png?amount=<AMOUNT>&addInfo=<DESCRIPTION>&accountName=<ACCOUNT_NAME>';
        this.loading = false;
        this.loading_banks = false;
        this.bankAccounts = [];
        this.bank_active = {};
    }
    ngOnInit() {
        this.getBanks();
    }
    getBanks() {
        this.vhQueryDealer.vietqr_getBanks()
            .then((res) => {
            // console.log('vietqr_getBanks', res)
            if (res.vcode == 0) {
                this.banks = res.data;
                this.getBanksAccount();
            }
        })
            .catch((err) => console.error(err));
    }
    ngAfterViewInit() {
        this.interval = setInterval(() => {
            this.vhQueryDealer.getPayment(this.id_payment)
                .then((payment) => {
                console.log(payment);
                if (payment.payment_type == 1 && payment.paid_online) {
                    this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Thanh toán thành công"));
                    this.nzModalService.closeAll();
                    this.router.navigate(['/dealer/dashboard/payment']);
                    clearInterval(this.interval);
                }
            });
        }, 5000);
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        clearInterval(this.interval);
    }
    getBanksAccount() {
        this.bankAccounts = [
            // {
            //   _id: "1",
            //   acq_id: "970436",
            //   account_name: "CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ VIETHAS",
            //   account_no: "0441000644964",
            //   template: "compact2",
            //   // branch: this.vhQuerySales.getDefaultBranch()._id
            // },
            {
                _id: "7",
                acq_id: "970422",
                account_name: "LE DUC HUY",
                account_no: "0909925354",
                template: "compact2",
                // branch: this.vhQuerySales.getDefaultBranch()._id
            },
            // {
            //   _id: "2",
            //   acq_id: "970436",
            //   account_name: "Nguyễn Hoàng Nam",
            //   account_no: "0251002660414",
            //   template: "compact2",
            //   // branch: this.vhQuerySales.getDefaultBranch()._id
            // },
            // {
            //   _id: "3",
            //   acq_id: "970406",
            //   account_name: "Nguyễn Hoàng Nam",
            //   account_no: "0104782569",
            //   template: "compact2",
            //   // branch: this.vhQuerySales.getDefaultBranch()._id
            // },
            // {
            //   _id: "4",
            //   acq_id: "970403",
            //   account_name: "Nguyễn Hoàng Nam",
            //   account_no: "060007797128",
            //   template: "compact2",
            //   // branch: this.vhQuerySales.getDefaultBranch()._id
            // },
            // {
            //   _id: "5",
            //   acq_id: "970416",
            //   account_name: "Nguyễn Hoàng Nam",
            //   account_no: "115621719",
            //   template: "compact2",
            //   // branch: this.vhQuerySales.getDefaultBranch()._id
            // },
            // {
            //   _id: "6",
            //   acq_id: "970405",
            //   account_name: "Nguyễn Hoàng Nam",
            //   account_no: "6360205227977",
            //   template: "compact2",
            //   // branch: this.vhQuerySales.getDefaultBranch()._id
            // },
        ];
        this.bankAccounts.forEach((bank) => {
            var _a;
            bank.logo = (_a = this.banks.find((b) => b.bin == bank.acq_id)) === null || _a === void 0 ? void 0 : _a.logo;
        });
        if (this.bankAccounts.length) {
            this.handleClick(this.bankAccounts[0]);
        }
    }
    handleClick(bank) {
        this.bank_active = bank;
        this.loading = true;
        const accountNo = bank.account_no;
        const accountName = bank.account_name;
        const acqId = bank.acq_id;
        const template = bank.template;
        const amount = this.total;
        const idBill = this.id_payment;
        this.vhQueryDealer.vietqr_generateQR(accountNo, accountName, acqId, template, idBill, amount)
            // this.vhQueryDealer.vietqr_generateQR('0909925354', 'LE DUC HUY', '970422', 'compact2', this.id_payment, 2000)
            .then((res) => {
            console.log('vietqr_generateQR', res);
            if (res.vcode == 0) {
                this.urlImg = res.data;
            }
        })
            .catch((err) => console.error(err))
            .finally(() => this.loading = false);
    }
}
QrBankingModalComponent.ɵfac = function QrBankingModalComponent_Factory(t) { return new (t || QrBankingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryDealer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalService)); };
QrBankingModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QrBankingModalComponent, selectors: [["atw-qr-banking-modal"]], inputs: { total: "total", id_payment: "id_payment" }, decls: 11, vars: 4, consts: [[1, "modal-container"], [1, "content-left"], ["alt", "QR Code", "style", "width:80%; height: auto", 3, "src", 4, "ngIf"], ["style", "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);", 4, "ngIf"], [1, "content-right"], [1, "account-list"], [4, "ngIf"], ["nzSimple", "", 4, "ngIf"], ["alt", "QR Code", 2, "width", "80%", "height", "auto", 3, "src"], [2, "position", "absolute", "top", "50%", "left", "50%", "transform", "translate(-50%, -50%)"], ["nzSimple", ""], [4, "ngFor", "ngForOf"], [1, "account-item", 3, "ngClass", "click"], [2, "width", "100%", "height", "auto", 3, "src", "alt"]], template: function QrBankingModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QrBankingModalComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QrBankingModalComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "S\u1EED d\u1EE5ng Mobile Banking h\u1ED7 tr\u1EE3 QR");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, QrBankingModalComponent_ng_container_9_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, QrBankingModalComponent_nz_spin_10_Template, 1, 0, "nz-spin", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.urlImg && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading_banks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading_banks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__.NzSpinComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], styles: [".modal-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.content-left[_ngcontent-%COMP%], .content-right[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.content-left[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.active[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n}\n\n.account-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 1rem;\n  gap: 1rem;\n  align-items: center;\n  overflow-y: auto;\n}\n\n.account-list[_ngcontent-%COMP%]   .account-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30%;\n}\n\n@media (max-width: 767px) {\n  .content-left[_ngcontent-%COMP%], .content-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .modal-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .account-list[_ngcontent-%COMP%]   .account-item[_ngcontent-%COMP%] {\n    width: 43%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLWJhbmtpbmctbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBOztFQUVJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSwyQ0FBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7QUFGSjs7QUFJSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBRlI7O0FBT0E7RUFDSTs7SUFFSSxXQUFBO0VBSk47O0VBT0U7SUFDSSxzQkFBQTtJQUNBLHVCQUFBO0VBSk47O0VBUU07SUFDSSxVQUFBO0VBTFY7QUFDRiIsImZpbGUiOiJxci1iYW5raW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1sZWZ0LFxyXG4uY29udGVudC1yaWdodCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29udGVudC1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuXHJcblxyXG4uYWNjb3VudC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgLmFjY291bnQtaXRlbSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5jb250ZW50LWxlZnQsXHJcbiAgICAuY29udGVudC1yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYWNjb3VudC1saXN0IHtcclxuICAgICAgICAuYWNjb3VudC1pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQzJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */"] });


/***/ }),

/***/ 99021:
/*!*************************************************************************************!*\
  !*** ./src/app/dealer/dashboard/payment/payment-detail/payment-detail.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailComponent": () => (/* binding */ PaymentDetailComponent)
/* harmony export */ });
/* harmony import */ var _component_qr_banking_modal_qr_banking_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/qr-banking-modal/qr-banking-modal.component */ 55387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
















function PaymentDetailComponent_div_6_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnConfirm", function PaymentDetailComponent_div_6_ng_container_27_Template_a_nzOnConfirm_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const item_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.confirmDelete(item_r5); })("nzOnCancel", function PaymentDetailComponent_div_6_ng_container_27_Template_a_nzOnCancel_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nz-input-number", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PaymentDetailComponent_div_6_ng_container_27_Template_nz_input_number_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const item_r5 = restoredCtx.$implicit; return item_r5.quantity = $event; })("nzBlur", function PaymentDetailComponent_div_6_ng_container_27_Template_nz_input_number_nzBlur_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const item_r5 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.updateQuantityPaymentDetail(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPopconfirmTitle", "B\u1EA1n c\u00F3 \u0111\u1ED3ng \u00FD x\u00F3a " + item_r5.name_package + " ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.name_package);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.day + " ng\u00E0y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.vhAlgorithm.vhcurrencyunit(item_r5.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r5.quantity)("nzMin", 1)("nzStep", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.vhAlgorithm.vhcurrencyunit(item_r5.quantity * item_r5.price));
} }
function PaymentDetailComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-table", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, PaymentDetailComponent_div_6_ng_container_27_Template, 18, 8, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx_r0.listDetail)("nzFrontPagination", false)("nzShowPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, "Payment package"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 11, "Used time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 13, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 15, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 17, "Total_amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r3.data);
} }
function PaymentDetailComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Thu\u1EBF: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "b", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.paymentCurrent.tax);
} }
function PaymentDetailComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " T\u1ED5ng ti\u1EC1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "b", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.vhAlgorithm.vhcurrencyunit_symbol(ctx_r2.total), "");
} }
class PaymentDetailComponent {
    constructor(router, vhQueryDealer, vhAlgorithm, vhComponent, vhAuth, datePipe, nzModalService) {
        this.router = router;
        this.vhQueryDealer = vhQueryDealer;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.vhAuth = vhAuth;
        this.datePipe = datePipe;
        this.nzModalService = nzModalService;
        this.listDetail = [];
        this.popupPackage = false;
        this.rank = 0;
        // this.listBranch = this.vhQuerySales.getlocalBranchs();
        this.stateData = this.router.getCurrentNavigation().extras.state;
        if (typeof this.stateData == 'object') {
            // stateData là 1 object payment đã tồn tại
            this.vhQueryDealer
                .getPayments({
                id_dealer: { $eq: this.vhAuth.getUser()._id },
                payment_type: { $eq: 5 },
            }, {}, {}, 1)
                .then((payments) => {
                this.paymentCurrent = payments[0];
                this.getListPaymentDetail(payments[0]);
            });
        }
        else {
            //  state này 1 id_package vừa chọn
            this.getPackageById(this.stateData); //  state lúc này là id
        }
    }
    ngOnInit() { }
    // heightScroll: string;
    // ngAfterViewChecked() {
    //   if (document.querySelector("#content") && document.querySelector(".ant-table-thead") && document.querySelector("#header") && document.querySelector(".payment")) {
    //     this.heightScroll = (document.querySelector("#content").clientHeight - document.querySelector(".ant-table-thead").clientHeight - document.querySelector(".payment").clientHeight
    //       - document.querySelector("#header").clientHeight) - 600 + "px";
    //   }
    //   this.cdRef.detectChanges();
    // }
    /** xóa payment_detail
     *
     * @param position    vị trí trong mãng listDetail
     * @param item        thông tin dữ liêu muốn xóa
     */
    deleteItem(payment_detail) {
        this.vhQueryDealer.deletePayment_Detail(payment_detail._id).then((bool) => {
            // if(payment_detail.promotion.length>0){
            //   payment_detail.promotion.forEach(element => {
            //     this.vhQuerySales.deletePayment_Detail(element._id)
            //     .then(()=>{
            // this.getListPaymentDetail(this.paymentCurrent);
            this.listDetail = this.listDetail.filter((item) => item._id != payment_detail._id);
            this.vhComponent.hideLoading(0).catch(e => { });
            this.setTotal();
            //     })
            //   });
            // }
        });
    }
    // xóa payment
    deletePayment() {
        this.vhQueryDealer.deletePayment(this.paymentCurrent._id).then((response) => {
            this.gotoBeforePage();
            this.vhComponent.hideLoading(0).catch(e => { });
        }, (error) => {
        });
    }
    addPackage() {
        this.gotoBeforePage();
    }
    outputTest(event) {
        this.listDetail.push(event);
    }
    /** thực hiện lấy thông tin gói đã chọn với id được truyền vào
      @param id_package  id của gói đã chọn
    */
    getPackageById(id_package) {
        Promise.all([
            this.vhQueryDealer.getPackage(id_package),
            this.vhQueryDealer.getPayments({
                id_dealer: { $eq: this.vhAuth.getUser()._id },
                payment_type: { $eq: 5 },
            }, {}, {}, 1),
        ]).then(([packageResponse, payment]) => {
            console.log(packageResponse);
            console.log(payment);
            if (payment.length == 0) {
                this.createPayment(packageResponse);
            }
            else {
                this.paymentCurrent = payment[0];
                this.updatePayment(packageResponse, payment[0]);
            }
        });
    }
    /** Tạo payment mới
     *
     * @param packageResponse dữ liệu từ hàm getPackage(id)
     */
    createPayment(packageResponse) {
        let data = {
            date: new Date(),
            payment_type: 5,
            tax: 0,
            total: 0,
        };
        this.vhQueryDealer.createPayment(data).then((payment) => {
            this.paymentCurrent = payment;
            let payment_detail_main = {
                id_payment: payment._id,
                id_restriction: packageResponse.id_restriction,
                id_package: packageResponse._id,
                package_type: 1,
                day: packageResponse.day,
                tax: 0,
                price: packageResponse.selling_price,
                quantity: 1,
                payment_detail_type: 1, //1: gói gia hạng mới, 2: gói nâng cấp, 3: gói kéo dài thêm thời gian
            };
            this.vhQueryDealer.createPayment_Detail(payment_detail_main).then((payment_detail) => {
                if (payment_detail) {
                    this.vhComponent.hideLoading(0).catch(e => { });
                    this.listDetail = [
                        Object.assign(Object.assign({}, payment_detail), { name_package: packageResponse.name }),
                    ];
                    this.setTotal();
                }
            }, (error) => {
                this.vhComponent.hideLoading(0).catch(e => { });
            });
        }, (error) => {
            this.vhComponent.hideLoading(0).catch(e => { });
        });
    }
    // Cập nhật payment
    updatePayment(packageResponse, payment) {
        let payment_detail_main = {
            // id_branch: this.vhQuerySales.getDefaultBranch()._id, //khách chọn
            id_payment: payment._id,
            id_restriction: packageResponse.id_restriction,
            id_package: packageResponse._id,
            package_type: 1,
            day: packageResponse.day,
            tax: 0,
            price: packageResponse.selling_price,
            quantity: 1,
            payment_detail_type: 1, //1: gói gia hạng mới, 2: gói nâng cấp, 3: gói kéo dài thêm thời gian
        };
        this.vhQueryDealer.createPayment_Detail(payment_detail_main).then((payment_detail) => {
            if (payment_detail) {
                // 
                // if(packageResponse.package_promotions.length>0){
                //   this.updatePaymentWithPromotion(packageResponse,payment,payment_detail._id);
                // }else{
                // this.ngOnInit()
                this.getListPaymentDetail(payment);
                // this.vhComponent.hideLoading(0)
                // }
                // this.getListPaymentDetail(payment);
                // this.vhComponent.hideLoading(0)
            }
        }, (error) => {
        });
    }
    gotoBeforePage() {
        this.router.navigate(['/dealer/dashboard/payment']);
    }
    // cập nhật số lượng payment_detail và các promotion của payment_detail đấy
    updateQuantityPaymentDetail(item) {
        this.vhComponent.showLoading('').then(() => {
            this.vhQueryDealer
                .updatePayment_Detail(item._id, {
                quantity: item.quantity,
            })
                .then((response) => {
                this.setTotal();
            });
        });
    }
    // cập nhật chi nhánh  payment_detail và các promotion của payment_detail đấy
    updateBranchPaymentDetail(item, event) {
        this.vhComponent.showLoading('');
        let id_branch = event;
        let dataUpdate = {
            id_branch: id_branch,
        };
        this.vhQueryDealer
            .updatePayment_Detail(item._id, dataUpdate)
            .then((response) => {
            item.id_branch = event;
            this.vhComponent.hideLoading(0).catch(e => { });
            // if(item.promotion.length>0){
            //   item.promotion.forEach(element => {
            //     this.vhQueryDealer.updatePayment_Detail(element._id,dataUpdate)
            //     .then((response)=>{
            //       this.getListPaymentDetail(this.paymentCurrent)
            //     })
            //   });
            // }
            // this.getListPaymentDetail(this.paymentCurrent)
        });
    }
    // Tổng tiền của các payment
    setTotal() {
        let result = 0;
        this.listDetail.forEach((element) => {
            result = result + element.price * element.quantity;
        });
        this.total = result;
        this.vhQueryDealer
            .updatePayment(this.paymentCurrent._id, { total: this.total })
            .then((response) => {
            this.vhComponent.hideLoading(0).catch(e => { });
        }, (error) => {
        });
    }
    // Tạo thêm payment_detail với package_promotions
    updatePaymentWithPromotion(packageResponse, payment, id_main_package) {
        packageResponse.package_promotions.forEach((element) => {
            this.vhQueryDealer.getPackage(element.id_package).then((response) => {
                let payment_detail_main = {
                    // id_branch: this.vhQuerySales.getDefaultBranch()._id, //khách chọn
                    id_payment: payment._id,
                    id_restriction: response.id_restriction,
                    id_package: response._id,
                    package_type: response.type,
                    day: response.day,
                    tax: response.tax,
                    price: 0,
                    quantity: 1,
                    payment_detail_type: 1,
                    id_main_package: id_main_package,
                };
                this.vhQueryDealer.createPayment_Detail(payment_detail_main).then((payment_detail) => {
                    if (payment_detail) {
                        this.getListPaymentDetail(payment);
                    }
                }, (error) => {
                });
            });
        });
    }
    // Lấy danh sách payment_detail
    getListPaymentDetail(payment) {
        this.vhQueryDealer
            .getPayment_details({ id_payment: { $eq: payment._id } }, {}, {}, 0)
            .then((payment_details) => {
            if (payment_details.length == 0) {
                this.deletePayment();
            }
            else {
                for (let i in payment_details) {
                    this.vhQueryDealer
                        .getPackage(payment_details[i].id_package)
                        .then((packages) => {
                        payment_details[i].name_package = packages['name'];
                    });
                }
                this.listDetail = payment_details;
                this.setTotal();
            }
            this.vhComponent.hideLoading(0).catch(e => { });
        });
    }
    // kiểm tra chi nhánh nếu là gói chính thì true, promotions thì false
    checkPackage(id_package) {
        let arr = id_package.split('_')[0];
        switch (arr) {
            case 'main': {
                return true;
            }
            default: {
                return false;
            }
        }
    }
    // Lấy tên chi nhánh
    getNameBranchById(id_branch) {
        let name;
        this.listBranch.forEach((element) => {
            if (element._id == id_branch) {
                name = element.name;
            }
        });
        return name;
    }
    sortPaymentDetails(payment_details) {
        let newArr = [];
        payment_details.forEach((element) => {
            if (this.checkPackage(element.id_package)) {
                const result = payment_details.filter((item) => item.id_main_package == element._id);
                element['promotion'] = result;
                newArr.push(element);
            }
        });
        return newArr;
    }
    cancel() {
    }
    confirmDelete(item) {
        this.vhComponent.showLoading('');
        if (this.listDetail.length > 1) {
            this.deleteItem(item);
            // this.vhComponent.hideLoading(0).catch(e=>{})
        }
        else if (this.listDetail.length == 1) {
            this.deleteItem(item);
            this.deletePayment();
            // this.vhComponent.hideLoading(0).catch(e=>{})
        }
    }
    confirmDeletePayment() {
        this.vhComponent.showLoading('');
        this.deletePayment();
    }
    gotoVNPay() {
        const screenWidth = window.innerWidth;
        const modalWidth = screenWidth <= 767 ? '90vw' : '60vw';
        this.nzModalService.create({
            nzTitle: 'QR Banking',
            nzContent: _component_qr_banking_modal_qr_banking_modal_component__WEBPACK_IMPORTED_MODULE_0__.QrBankingModalComponent,
            nzFooter: null,
            nzWidth: modalWidth,
            nzComponentParams: {
                // total:  2000,
                total: this.total,
                id_payment: this.paymentCurrent._id
            },
        });
    }
    formatDate(date) {
        return this.datePipe.transform(date, 'dd/MM/yyyy HH:MM:ss');
    }
}
PaymentDetailComponent.ɵfac = function PaymentDetailComponent_Factory(t) { return new (t || PaymentDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQueryDealer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalService)); };
PaymentDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentDetailComponent, selectors: [["app-payment-detail"]], decls: 20, vars: 7, consts: [["id", "content"], ["nz-row", "", 2, "height", "100%"], ["nz-col", "", "nzSpan", "24", "id", "header", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "24", "class", "table-detail ant-table-body", 4, "ngIf"], [1, "payment"], ["id", "button", 1, "buttons"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottom", 1, "btn_red", 3, "nzPopconfirmTitle", "nzOnConfirm", "nzOnCancel"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 1, "left"], [1, "btn_yellow", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline", 1, "left"], [1, "btn_green", 3, "click"], ["nz-icon", "", "nzType", "arrow-right", "nzTheme", "outline", 1, "right"], ["id", "total", "style", "text-align: end;padding-right: 16px", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "table-detail", "ant-table-body"], [3, "nzData", "nzFrontPagination", "nzShowPagination"], ["data", ""], [2, "width", "3%"], ["nzAlign", "left", 2, "width", "15%"], [1, "text-align", 2, "width", "20%"], ["nzAlign", "right", 2, "width", "15%"], [1, "text-align", 2, "width", "10%"], ["nzAlign", "right", 2, "width", "22%"], [4, "ngFor", "ngForOf"], [2, "text-align", "center"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottom", 3, "nzPopconfirmTitle", "nzOnConfirm", "nzOnCancel"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline"], ["nzAlign", "left", 2, "width", "20%"], [1, "green", 2, "width", "15%"], [2, "width", "10%"], [3, "ngModel", "nzMin", "nzStep", "ngModelChange", "nzBlur"], ["id", "total", 2, "text-align", "end", "padding-right", "16px"], [2, "margin-left", "8px"], [2, "margin-left", "8px", "color", "#00a859"]], template: function PaymentDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PaymentDetailComponent_div_6_Template, 28, 19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnConfirm", function PaymentDetailComponent_Template_button_nzOnConfirm_9_listener() { return ctx.confirmDeletePayment(); })("nzOnCancel", function PaymentDetailComponent_Template_button_nzOnCancel_9_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " H\u1EE7y mua h\u00E0ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentDetailComponent_Template_button_click_12_listener() { return ctx.gotoBeforePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Mua ti\u1EBFp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentDetailComponent_Template_button_click_15_listener() { return ctx.gotoVNPay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Thanh to\u00E1n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, PaymentDetailComponent_div_18_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, PaymentDetailComponent_div_19_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, "Th\u00F4ng tin thanh to\u00E1n"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.listDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPopconfirmTitle", "X\u00E1c nh\u1EADn x\u00F3a \u0111\u01A1n h\u00E0ng?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.total);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_9__.NzPopconfirmDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_13__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 12px;\n  height: 99%;\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n  height: 5%;\n}\nnz-layout[_ngcontent-%COMP%]   .table-detail[_ngcontent-%COMP%] {\n  height: 83%;\n  overflow-y: auto;\n  margin-bottom: 1%;\n}\nnz-layout[_ngcontent-%COMP%]   .table-detail[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .table-detail[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .table-detail[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  text-align: center;\n  border-radius: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .table-detail[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-red);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 12%;\n  border-top: 1px solid lightgrey;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  float: right;\n  display: flex;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 4px 8px;\n  padding: 16px;\n  font-size: 0.875rem;\n  border: 1px solid;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn_red[_ngcontent-%COMP%] {\n  color: #ff3939;\n  background-color: #fff;\n  border-color: #ff3939;\n  display: flex;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn_yellow[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ff9f0f;\n  border-color: #ff9f0f;\n  display: flex;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn_green[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00a859;\n  border-color: #00a859;\n  display: flex;\n  align-items: center;\n}\n.text-align[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.green[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBQ1I7QUFDSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFHb0I7RUFDSSxrQkFBQTtBQUR4QjtBQUV3QjtFQUNJLFdBQUE7QUFBNUI7QUFFd0I7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBNUI7QUFFd0I7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUFBNUI7QUFPSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUxSO0FBTVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSlo7QUFLWTtFQUNJLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFIaEI7QUFJZ0I7RUFDSSxpQkFBQTtBQUZwQjtBQUlnQjtFQUNJLGdCQUFBO0FBRnBCO0FBS1k7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhoQjtBQUtZO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIaEI7QUFLWTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSGhCO0FBU0E7RUFDSSw2QkFBQTtBQU5KO0FBU0E7RUFDSSwyQ0FBQTtBQU5KIiwiZmlsZSI6InBheW1lbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGhlaWdodDogOTklO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDUlO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWRldGFpbCB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MyU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgICAgICBuei10YWJsZSB7XHJcbiAgICAgICAgICAgIHRib2R5IHtcclxuICAgICAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnotc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYXltZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyJTtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLmJ1dHRvbnMge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDRweCA4cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG5fcmVkIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmYzOTM5O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmMzkzOTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG5feWVsbG93IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWYwZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOWYwZjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG5fZ3JlZW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhODU5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBhODU5O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0LWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 64163:
/*!***************************************************************!*\
  !*** ./src/app/dealer/dashboard/payment/payment.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _component_package_package_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/package/package.component */ 77162);
/* harmony import */ var _component_extended_features_extended_features_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/extended-features/extended-features.component */ 31259);








class PaymentComponent {
    constructor(vhQuerySales, vhQueryDealer, vhAuth, router, vhComponent) {
        this.vhQuerySales = vhQuerySales;
        this.vhQueryDealer = vhQueryDealer;
        this.vhAuth = vhAuth;
        this.router = router;
        this.vhComponent = vhComponent;
    }
    ngOnInit() {
        // go to thanh toán
        this.vhQueryDealer.getPayments({ id_dealer: { $eq: this.vhAuth.getUser()._id }, payment_type: { $eq: 5 } }, {}, {}, 0).then((payments) => {
            if (payments) {
                if (payments.length > 0) {
                    this.router.navigate(['/dealer/dashboard/payment/detail'], {
                        state: payments
                    });
                }
                else
                    this.vhComponent.hideLoading(0);
            }
            else
                this.vhComponent.hideLoading(0);
        }, err => {
            console.log(err);
        });
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQueryDealer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent)); };
PaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 19, vars: 0, consts: [[1, "ant-table-body"], ["nz-row", "", 1, "ant-table-body"], ["nz-col", "", "nzSpan", "24", 1, "main"], [1, "background"], [1, "title"], [1, "sub"], [1, "package"], [1, "extended-feeatures"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "G\u00F3i ph\u1EA7n m\u1EC1m \u01B0u \u0111\u00E3i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Gi\u00E1 ch\u1EC9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "2.000\u0111/");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " ng\u00E0y (ti\u1EBFt ki\u1EC7m \u0111\u1EBFn 70%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "app-package");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Mi\u1EC5n ph\u00ED c\u00E1c t\u00EDnh n\u0103ng m\u1EDF r\u1ED9ng c\u1EE7a ph\u1EA7n m\u1EC1m");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-extended-features");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, _component_package_package_component__WEBPACK_IMPORTED_MODULE_1__.PackageComponent, _component_extended_features_extended_features_component__WEBPACK_IMPORTED_MODULE_2__.ExtendedFeaturesComponent], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%] {\n  overflow: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(180deg, #d1f1d2 0%, var(--unnamed-color-ffffff) 100%) 0% 0% no-repeat padding-box;\n  background: transparent linear-gradient(180deg, #d1f1d2 0%, #ffffff 100%) 0% 0% no-repeat padding-box;\n  opacity: 1;\n  height: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 24px;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem !important;\n  color: #373737 !important;\n  font-weight: inherit;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  text-align: center;\n  letter-spacing: NaNpx;\n  color: #0282bb;\n  opacity: 1;\n  font-size: 2.5rem;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .extended-feeatures[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 24px;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .extended-feeatures[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%] {\n  padding: 16px 16px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFHQSxZQUFBO0VBQ0EsV0FBQTtBQURKO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFDUTtFQUNJLG1CQUFBO0FBQ1o7QUFBWTtFQUNJLHlIQUFBO0VBQ0EscUdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUVoQjtBQURnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHcEI7QUFGb0I7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFJeEI7QUFGb0I7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUl4QjtBQUNnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDcEI7QUFBb0I7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBRXhCO0FBRVk7RUFDSSxzQkFBQTtBQUFoQiIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gcGFkZGluZzogMTZweDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5hbnQtdGFibGUtYm9keSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZDFmMWQyIDAlLCB2YXIoLS11bm5hbWVkLWNvbG9yLWZmZmZmZikgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2QxZjFkMiAwJSwgI2ZmZmZmZiAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM3MzczNyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IE5hTnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAyODJiYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5leHRlbmRlZC1mZWVhdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYWNrYWdlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 17562:
/*!************************************************************!*\
  !*** ./src/app/dealer/dashboard/payment/payment.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentModule": () => (/* binding */ PaymentModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _component_package_package_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/package/package.component */ 77162);
/* harmony import */ var _component_extended_features_extended_features_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/extended-features/extended-features.component */ 31259);
/* harmony import */ var _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/card/card.component */ 73553);
/* harmony import */ var _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-detail/payment-detail.component */ 99021);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _component_popup_package_popup_package_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/popup-package/popup-package.component */ 32964);
/* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.component */ 64163);
/* harmony import */ var _component_qr_banking_modal_qr_banking_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/qr-banking-modal/qr-banking-modal.component */ 55387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
















const routes = [
    {
        path: '',
        component: _payment_component__WEBPACK_IMPORTED_MODULE_6__.PaymentComponent
    },
    {
        path: 'detail',
        component: _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_4__.PaymentDetailComponent
    }
];
class PaymentModule {
}
PaymentModule.ɵfac = function PaymentModule_Factory(t) { return new (t || PaymentModule)(); };
PaymentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PaymentModule });
PaymentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule,
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PaymentModule, { declarations: [_payment_component__WEBPACK_IMPORTED_MODULE_6__.PaymentComponent,
        _component_package_package_component__WEBPACK_IMPORTED_MODULE_1__.PackageComponent, _component_extended_features_extended_features_component__WEBPACK_IMPORTED_MODULE_2__.ExtendedFeaturesComponent, _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_4__.PaymentDetailComponent, _component_popup_package_popup_package_component__WEBPACK_IMPORTED_MODULE_5__.PopupPackageComponent,
        _component_qr_banking_modal_qr_banking_modal_component__WEBPACK_IMPORTED_MODULE_7__.QrBankingModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_dealer_dashboard_payment_payment_module_ts.js.map