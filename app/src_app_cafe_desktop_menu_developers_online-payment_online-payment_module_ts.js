"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_developers_online-payment_online-payment_module_ts"],{

/***/ 11083:
/*!**********************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/developers/online-payment/component/card/card.component.ts ***!
  \**********************************************************************************************/
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
CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { item: "item" }, decls: 14, vars: 9, consts: [[1, "cardContent", "mb-2", "rounded"], [1, "card-bodyContent"], [1, "card-title"], [2, "font-size", "1.2rem", 3, "ngStyle"], [1, "card-descriptrion", "mb-2"], [2, "white-space", "break-spaces"], [1, "card-free", 3, "ngStyle"], [2, "color", "white", "font-size", "16px"], [1, "card-content"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mi\u1EC5n ph\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".cardContent[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 12px !important;\n  height: 340px;\n  box-shadow: 1px 1px 2px #00000029;\n  background-color: #FFFFFF;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 20px;\n  display: flex;\n  align-items: initial;\n  justify-content: center;\n  margin-top: 2rem;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-weight: 900;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .card-descriptrion[_ngcontent-%COMP%] {\n  margin-top: 2.1rem;\n  color: #8E8E93;\n  text-align: center;\n  white-space: pre;\n  font-size: 0.75rem;\n  font-weight: lighter;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .card-free[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #FFFFFF;\n  height: 40px;\n  font-size: large;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 8px;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  margin: 20px 5px 0px;\n  height: 118px;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n}\n.cardContent[_ngcontent-%COMP%]   .card-bodyContent[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00a859;\n  border-color: #00a859;\n  background-color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNaO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNaO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ1o7QUFDUTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtBQUNaO0FBQVk7RUFDSSxrQkFBQTtBQUVoQjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ1o7QUFBWTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRWhCIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZENvbnRlbnQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAjMDAwMDAwMjk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgLmNhcmQtYm9keUNvbnRlbnQge1xyXG4gICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBpbml0aWFsO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1kZXNjcmlwdHJpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjFyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOEU4RTkzO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWZyZWUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDVweCAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTE4cHg7XHJcbiAgICAgICAgICAgIHAgeyBcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDAsIDE2OCwgODkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTY4LCA4OSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 75912:
/*!************************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/developers/online-payment/component/extended-features/extended-features.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtendedFeaturesComponent": () => (/* binding */ ExtendedFeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/card.component */ 11083);




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
                color: '#00A859',
                title: 'Cảnh báo trễ món',
                descriptrion: 'Phần mềm sẽ hỗ trợ nhắc cảnh báo khi bị trễ món',
                content: 'Hệ thống thiết lập và quy định thời gian ra món cho từng món ăn. Từ đó, điều phối viên hay bếp sẽ thấy nhắc cảnh báo trễ món trên giao diện gọi món. Với tính năng này sẽ giúp hạn chế việc ra món quá trễ làm cho thực khách phiền lòng vì phải chờ đợi.',
            },
            {
                color: '#0090DA',
                title: 'Điều phối bếp',
                descriptrion: 'Tính năng điều phối hỗ trợ tối đa và hiệu quả cho nhà hàng, quán ăn',
                content: 'Với tính năng này sẽ tự động cập nhật và sắp xếp thứ tự ra món khi thao tác gọi món hình thành thông qua giao diện bán hàng. Từ đó điều phối viên, bếp hay bất kỳ ai thuộc nhân viên nhà hàng, quán ăn cũng biết được thời gian gọi món và ra món.',
            },
            {
                color: '#F05B13',
                title: 'Gọi món nhanh chóng',
                descriptrion: 'Đơn sẽ được đẩy tự động xuống bếp',
                content: 'Khi thực khách gọi món, nhân viên có thể thực hiện thao tác trực tiếp trên điện thoại, thông qua đó đơn sẽ tự động được chuyển qua giao diện quản lý bếp. Vì vậy nhân viên sẽ không mất thời gian di chuyển về bếp để đưa phiếu gọi món hay bị xót món.',
            },
            {
                color: '#FF4747',
                title: 'Tách bàn, chuyển bàn',
                descriptrion: 'Tách bàn, chuyển bàn linh hoạt',
                content: 'Bạn chỉ cần thực hiện vài thao tác đơn giản là có thể chuyển hoặc tách bàn một cách dễ dàng, không cần bất kỳ ghi chép nào, không cần phải tính toán lại số tiền các món ăn được chuyển. Vì mọi thứ đã được hệ thống tự động cập nhật.',
            },
            {
                color: '#9D47FF',
                title: 'Thiết kế và in tem món ăn, trà sữa,...',
                descriptrion: 'Món ăn có tem nhận dạng',
                content: 'Tính năng thiết kế và in tem cho phép bạn tự tạo ra mẫu tem cho nhà hàng, quán ăn của mình, các sản phẩm sử dụng mẫu tem đã thiết kế sẽ đồng bộ về trình bày và chi tiết hơn khi nhân viên và thực khách cùng xem tem trên món ăn đó.',
            },
            {
                color: '#E96B9F',
                title: 'Giao diện bán hàng đa dạng, chi tiết và dễ sử dụng',
                descriptrion: 'Phù hợp cho nhiều mô hình nhà hàng',
                content: 'Phần mềm cung cấp nhiều giao diện bán hàng khác nhau. Từ đó, bạn có thể lựa chọn giao diện phù hợp dựa vào tiêu chí và mô hình kinh doanh nhà hàng, quán ăn của mình mà vẫn đảm bảo đầy đủ tính năng và thao tác người dùng dễ dàng, đơn giản',
            },
            {
                color: '#FEC007',
                title: 'Tính năng thiết kế khu vực',
                descriptrion: 'Phần mềm phát huy tối ưu tính năng thiết kế khu vực',
                content: 'Cho phép thiết kế khu vực mà không giới hạn số lượng bàn. Đơn mang về được bố trí riêng biệt giúp bạn phân biết giữa đơn mang về và tại chỗ. Ngoài ra, tính năng cho phép bật, tắt sử dụng khu vực khi tạo xong nếu người dùng chưa có nhu cầu sử dụng.',
            },
            {
                color: '#777777',
                title: 'Đối soát thu chi',
                descriptrion: 'Quản lý việc thu, chi hằng ngày',
                content: 'Hệ thống sẽ tự động cập nhật việc thu, chi hằng ngày khi phát sinh giao dịch như mua nguyên liệu, thuế, lợi nhuận,... nhà hàng, quán ăn của mình. Và toàn bộ dữ liệu trên sẽ được phản ánh cụ thể thông qua các báo cáo định kỳ.',
            },
            {
                color: '#04ACAC',
                title: 'Quản lý kho và nhập - xuất nguyên liệu linh hoạt',
                descriptrion: 'Dữ liệu rõ ràng, đầy đủ và chính xác',
                content: 'Trong quá trình quản lý kho, nguyên liệu cũng phải quản lý chính xác, chặt chẽ để tránh bị thiếu hụt khi chế biến và làm ra món ăn. Hay lãng phí do nhập nguyên liệu dư thừa khiến cho bị tồn đọng hay phải tiêu hủy khi nguyên liệu đã hết hạn sử dụng.',
            },
            {
                color: '#B90046',
                title: 'Tương thích với nhiều thiết bị thông dụng',
                descriptrion: 'Giúp cho bạn tiết kiệm nhiều thời gian',
                content: 'Phần mềm Café Viethas tương thích với nhiều thiết bị như: máy POS, máy POS cầm tay, máy in hóa đơn, điện thoại, máy tính,… từ đó bạn có thể kết nối và cấu hình dễ dàng. Giúp cho thao tác bán hàng diễn ra nhanh chóng, tiết kiệm thời gian tối đa.',
            },
            {
                color: '#2D09A4',
                title: 'Kiểm tra tình hình hoạt động',
                descriptrion: 'Quản lý việc thu, chi hằng ngày',
                content: 'Quản lý hoạt động nhiều chi nhánh nhà hàng, quán ăn cùng một lúc. Dễ dàng chuyển tiền, trao đổi hàng hóa qua lại giữa các chi nhánh, ngoài ra có thể sắp xếp nhân viên làm việc ở các chi nhánh khác nhau tránh tình trạng thiếu người hoặc dư người.',
            },
            {
                color: '#AE001A',
                title: 'Lựa chọn mẫu thực đơn yêu thích',
                descriptrion: 'Nhiều giao diện thực đơn ấn tượng',
                content: 'Phần mềm Café Viethas đã thiết kế sẵn nhiều mẫu thực đơn cho bạn lựa chọn, thông tin thực đơn sẽ được lấy từ dữ liệu mà bạn đã tạo trong hệ thống, và bạn chỉ cần chọn mẫu và in ra là đã có thực đơn ưng ý để bán cho khách hàng.',
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

/***/ 43767:
/*!****************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/developers/online-payment/component/package/package.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageComponent": () => (/* binding */ PackageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);






function PackageComponent_div_0_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 18);
} }
function PackageComponent_div_0_div_1_div_23_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemChild_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](itemChild_r7.title);
} }
function PackageComponent_div_0_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PackageComponent_div_0_div_1_div_23_span_4_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemChild_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", itemChild_r7.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", itemChild_r7.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", itemChild_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", itemChild_r7.title_features_list, " ");
} }
function PackageComponent_div_0_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 18);
} }
function PackageComponent_div_0_div_1_i_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("**", item_r2.note, "");
} }
const _c0 = function (a0) { return { color: a0 }; };
const _c1 = function (a0) { return { background: a0 }; };
function PackageComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PackageComponent_div_0_div_1_div_20_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PackageComponent_div_0_div_1_div_23_Template, 6, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PackageComponent_div_0_div_1_div_24_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PackageComponent_div_0_div_1_i_26_Template, 2, 1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PackageComponent_div_0_div_1_Template_button_click_28_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const item_r2 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.gotoPaymentDetail(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, item_r2.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.sub_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 12, item_r2.price, "1.0-0") + " \u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 15, item_r2.price_discount, "1.0-0") + " \u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r2.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r2.features_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r2.sub_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r2.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c1, item_r2.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.freeaccount ? "Thanh to\u00E1n" : !ctx_r1.freeaccount && ctx_r1.id_restriction == item_r2.id_package ? "Thanh to\u00E1n" : "Li\u00EAn h\u1EC7 0934.606060", " ");
} }
function PackageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PackageComponent_div_0_div_1_Template, 30, 22, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.data);
} }
class PackageComponent {
    constructor(router, vhQueryCafe, vhComponent, vhAuth, vhQueryAffiliater, vhQuerySales) {
        this.router = router;
        this.vhQueryCafe = vhQueryCafe;
        this.vhComponent = vhComponent;
        this.vhAuth = vhAuth;
        this.vhQueryAffiliater = vhQueryAffiliater;
        this.vhQuerySales = vhQuerySales;
        this.data = [
            //  {
            //   id: 'store_main_package_standard_1month',
            //   color: '#3FA4EB',
            //   title: 'Gói 1 tháng STANDARD',
            //   price: 265000,
            //   price_discount: 165000,
            //   duration: '1 tháng',
            //   branch: '',                    // chi nhánh
            //   value: 1,                     // giá trị
            //   unit: 'tháng',                 // đơn vị
            //   quantity: 1,
            //   features_list: [
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Không phí khởi tạo'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Miễn phí hướng dẫn sử dụng online (ultraview, zalo)'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Không giới hạn tính năng'
            //     },
            //     // {
            //     //   icon: 'assets/img/tick.svg',
            //     //   title_features_list: 'Kết nối nhà vận chuyển'
            //     // },
            //     // {
            //     //   icon: 'assets/img/tick.svg',
            //     //   title_features_list: 'Quản lý bảo hành, sửa chữa'
            //     // },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý nhiều chi nhánh'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Bán hàng tại cửa hàng'
            //     }, 
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý điều phối bếp/nhân viên'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       color:"red",
            //       title_features_list: 'Xuất hóa đơn thuế tự động'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Nhiều mẫu thực đơn gọi món'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Đa dạng giao diện bán hàng cho từng ngành nghề'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Tạo nhiều chương trình khuyến mãi voucher, coupon, paymentcard'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý khách thành viên, VIP...'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý hàng hóa theo kích cỡ, theo thuộc tính, theo lô..'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý tồn kho, doanh thu, lợi nhuận...'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý công nợ, chiết khấu khách hàng, hoa hồng nhân viên'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       color:"green",
            //       title_features_list: '3 tài khoản truy cập (1 user boss, 2 user nhân viên)'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Hỗ trợ kỹ thuật qua tổng đài'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       color:"green",
            //       title_features_list: 'Phát sinh trong tháng 2000 đơn'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       color:"red",
            //       title_features_list: 'Tặng thiết kế website miễn phí'
            //     },
            //   ]
            // },
            {
                id: 'store_main_package_standard_12month',
                id_package: "main_package_standard",
                color: '#3FA4EB',
                title: 'Gói 1 năm STANDARD',
                price: 2980000,
                price_discount: 1980000,
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
                        title: 'Ngành F&B',
                        title_features_list: '(chức năng tạo menu, điều phối món,in bếp, in tem trà sữa, định lượng, kiểm kho,...)'
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
                        title_features_list: '3 gian hàng thương mại điện tử'
                    },
                ]
            },
            // {
            //   id: 'store_main_package_pro_1month',
            //   color: '#3FA4EB',
            //   title: 'Gói 1 tháng PRO',
            //   price: 345000,
            //   price_discount: 245000,
            //   duration: '1 tháng',
            //   branch: '',                    // chi nhánh
            //   value: 1,                     // giá trị
            //   unit: 'tháng',                 // đơn vị
            //   quantity: 1,
            //   features_list: [
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Không phí khởi tạo'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Miễn phí hướng dẫn sử dụng online (ultraview, zalo)'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Không giới hạn tính năng'
            //     },
            //     // {
            //     //   icon: 'assets/img/tick.svg',
            //     //   title_features_list: 'Kết nối nhà vận chuyển'
            //     // },
            //     // {
            //     //   icon: 'assets/img/tick.svg',
            //     //   title_features_list: 'Quản lý bảo hành, sửa chữa'
            //     // },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý nhiều chi nhánh'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Bán hàng tại cửa hàng'
            //     }, 
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý điều phối bếp/nhân viên'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       color:"red",
            //       title_features_list: 'Xuất hóa đơn thuế tự động'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Nhiều mẫu thực đơn gọi món'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Đa dạng giao diện bán hàng cho từng ngành nghề'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Tạo nhiều chương trình khuyến mãi voucher, coupon, paymentcard'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý khách thành viên, VIP...'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý hàng hóa theo kích cỡ, theo thuộc tính, theo lô..'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý tồn kho, doanh thu, lợi nhuận...'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý công nợ, chiết khấu khách hàng, hoa hồng nhân viên'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       color:"green",
            //       title_features_list: '3 tài khoản truy cập (1 user boss, 2 user nhân viên)'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Hỗ trợ kỹ thuật qua tổng đài'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       color:"green",
            //       title_features_list: 'Phát sinh trong tháng 2000 đơn'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       color:"red",
            //       title_features_list: 'Tặng thiết kế website miễn phí'
            //     },
            //   ]
            // },
            {
                id: 'store_main_package_pro_12month',
                id_package: "main_package_pro",
                color: '#3FA4EB',
                title: 'Gói 1 năm PRO',
                price: 3940000,
                price_discount: 2940000,
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
                        title: 'Ngành F&B',
                        title_features_list: '(chức năng tạo menu, điều phối món,in bếp, in tem trà sữa, định lượng, kiểm kho,...)'
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
                        title_features_list: '6 gian hàng thương mại điện tử'
                    },
                ]
            },
            // {
            //   id: 'store_main_package_super_pro_1month',
            //   color: '#3FA4EB',
            //   title: 'Gói 1 tháng SUPER-PRO',
            //   price: 430000,
            //   price_discount: 330000,
            //   duration: '1 tháng',
            //   branch: '',                    // chi nhánh
            //   value: 1,                     // giá trị
            //   unit: 'tháng',                 // đơn vị
            //   quantity: 1,
            //   features_list: [
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Không phí khởi tạo'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Miễn phí hướng dẫn sử dụng online (ultraview, zalo)'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Không giới hạn tính năng'
            //     },
            //     // {
            //     //   icon: 'assets/img/tick.svg',
            //     //   title_features_list: 'Kết nối nhà vận chuyển'
            //     // },
            //     // {
            //     //   icon: 'assets/img/tick.svg',
            //     //   title_features_list: 'Quản lý bảo hành, sửa chữa'
            //     // },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý nhiều chi nhánh'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Bán hàng tại cửa hàng'
            //     }, 
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý điều phối bếp/nhân viên'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       color:"red",
            //       title_features_list: 'Xuất hóa đơn thuế tự động'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Nhiều mẫu thực đơn gọi món'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Đa dạng giao diện bán hàng cho từng ngành nghề'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Tạo nhiều chương trình khuyến mãi voucher, coupon, paymentcard'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý khách thành viên, VIP...'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý hàng hóa theo kích cỡ, theo thuộc tính, theo lô..'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý tồn kho, doanh thu, lợi nhuận...'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Quản lý công nợ, chiết khấu khách hàng, hoa hồng nhân viên'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       color:"green",
            //       title_features_list: '3 tài khoản truy cập (1 user boss, 2 user nhân viên)'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       title_features_list: 'Hỗ trợ kỹ thuật qua tổng đài'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       color:"green",
            //       title_features_list: 'Phát sinh trong tháng 2000 đơn'
            //     },
            //     {
            //       icon: 'assets/img/tick.svg',
            //       color:"red",
            //       title_features_list: 'Tặng thiết kế website miễn phí'
            //     },
            //   ]
            // },
            {
                id: 'store_main_package_super_pro_12month',
                id_package: "main_package_super_pro",
                color: '#3FA4EB',
                title: 'Gói 1 năm SUPER-PRO',
                price: 4960000,
                price_discount: 3960000,
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
                        title: 'Ngành F&B',
                        title_features_list: '(chức năng tạo menu, điều phối món,in bếp, in tem trà sữa, định lượng, kiểm kho,...)'
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
                        title_features_list: '10 gian hàng thương mại điện tử'
                    },
                ]
            },
        ];
        this.is_affiliate = false;
        this.id_restriction = '';
        this.isLoaded = false;
        this.freeaccount = true;
    }
    ngOnInit() {
        console.log(this.vhQueryCafe.getLocalRestrictionMainPackage());
        console.log(this.vhAuth.getStore());
        console.log(this.vhQueryCafe.getDefaultBranch());
        this.freeaccount = this.vhAuth.getStore().freeaccount;
        Promise.all([
            this.vhQueryCafe.getPackage('store_main_package_startup_12month'),
            this.vhQueryCafe.getPackage('store_main_package_standard_12month'),
            this.vhQueryCafe.getPackage('store_main_package_pro_12month'),
            this.vhQueryCafe.getPackage('store_main_package_super_pro_12month'),
        ]).then(([store_main_package_startup_12month, store_main_package_standard_12month, store_main_package_pro_12month, store_main_package_super_pro_12month]) => {
            console.log('store_main_package_startup_12month', store_main_package_startup_12month);
            console.log('store_main_package_standard_12month', store_main_package_standard_12month);
            console.log('store_main_package_pro_12month', store_main_package_pro_12month);
            console.log('store_main_package_super_pro_12month', store_main_package_super_pro_12month);
            // gán lại giá theo gói đã lấy từ server
            this.data[0].price_discount = store_main_package_standard_12month.selling_price;
            this.data[0].price = store_main_package_standard_12month.original_price;
            this.data[1].price_discount = store_main_package_pro_12month.selling_price;
            this.data[1].price = store_main_package_pro_12month.original_price;
            this.data[2].price_discount = store_main_package_super_pro_12month.selling_price;
            this.data[2].price = store_main_package_super_pro_12month.original_price;
            // kiểm tra tài khoản đã gia hạn hay chưa
            if (this.vhAuth.getStore().freeaccount) {
                // thêm gói COMBO STARTUP cho tài khoản freeaccount
                this.data.unshift({
                    id: 'store_main_package_startup_12month',
                    id_package: "main_package_standard",
                    color: '#3FA4EB',
                    title: 'Gói COMBO STARTUP',
                    sub_title: 'PHẦN MỀM + 1000 HÓA ĐƠN + CHỮ KÝ SỐ',
                    note: "Quý Khách trả thêm phí đăng ký thuế duy nhất trọn đời 500.000đ",
                    price: store_main_package_startup_12month.original_price,
                    price_discount: store_main_package_startup_12month.selling_price,
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
                            title: 'Ngành F&B',
                            title_features_list: '(chức năng tạo menu, điều phối món,in bếp, in tem trà sữa, định lượng, kiểm kho,...)'
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
                            title_features_list: '3 gian hàng thương mại điện tử'
                        },
                    ]
                });
                // trường hợp thông qua affiliate thì get thông tin và gán lại giá
                if (this.vhAuth.getStore().affiliaterCode) {
                    // console.log('getAffiliate');
                    this.vhQuerySales.getAffiliate_byFields({ code: { $eq: this.vhAuth.getStore().affiliaterCode } })
                        .then((affiliate) => {
                        if (affiliate) {
                            console.log('getAffiliate', affiliate);
                            if (affiliate.length) {
                                const paymentIds = new Set(affiliate[0].payment_details.map((detail) => detail.id_package));
                                this.data = this.data.filter(item => paymentIds.has(item.id));
                                for (const detail of affiliate[0].payment_details) {
                                    const dataItem = this.data.find(item => item.id === detail.id_package);
                                    if (dataItem) {
                                        dataItem.price_discount = detail.selling_price;
                                        dataItem.price = detail.original_price;
                                    }
                                }
                            }
                            this.isLoaded = true;
                            this.is_affiliate = true;
                        }
                    });
                }
                else {
                    this.isLoaded = true;
                    this.data = this.data;
                }
            }
            else {
                this.isLoaded = true;
                this.data = this.data;
                this.id_restriction = this.vhAuth.getStore()[this.vhQueryCafe.getDefaultBranch()._id].main_package_expire.id_restriction;
                console.log('id_restriction', this.id_restriction);
            }
        });
    }
    gotoPaymentDetail(item) {
        if (!this.freeaccount && this.id_restriction != item.id_package) {
            this.vhComponent.alertMessageDesktop("warning", "Vui lòng liên hệ 0934.606060 để gia hạn gói phần mềm", 5000);
            return;
        }
        this.vhComponent.showLoading("");
        this.router.navigate(['/cafe/dashboard/developers/online-payment/detail'], { state: { id_package: item.id, price: item.price_discount, is_affiliate: this.is_affiliate } });
    }
}
PackageComponent.ɵfac = function PackageComponent_Factory(t) { return new (t || PackageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryAffiliater), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales)); };
PackageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PackageComponent, selectors: [["app-package"]], decls: 1, vars: 1, consts: [["nz-row", "", "class", "ant-table-body", 4, "ngIf"], ["nz-row", "", 1, "ant-table-body"], ["nz-col", "", "nzSpan", "12", "class", "layout_item", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "12", 1, "layout_item"], [1, "item"], [1, "title", 3, "ngStyle"], [2, "color", "red", "font-size", "1.3rem"], [1, "price"], [1, "price_discount"], [1, "number"], [1, "charater"], ["style", "height: 30px", 4, "ngIf"], [1, "content"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12", "class", "feature", 4, "ngFor", "ngForOf"], ["style", "color: red", 4, "ngIf"], [1, "button"], [3, "ngStyle", "click"], [2, "height", "30px"], ["nz-col", "", "nzSpan", "12", 1, "feature"], ["id", "feature_item"], [3, "src"], ["style", "color: red;font-weight: bold;", 4, "ngIf"], [2, "color", "red", "font-weight", "bold"], [2, "color", "red"]], template: function PackageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PackageComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe], styles: [".ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  box-shadow: 2px 4px 8px #888888;\n  margin: 0px 46px 16px;\n  border-radius: 16px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  justify-items: center;\n  align-items: end;\n  justify-content: center;\n  text-align: center;\n  padding-top: 16px;\n  letter-spacing: -1px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 4px;\n  text-decoration: line-through;\n  color: #8E8E8E;\n  font-size: 1.2rem;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .price_discount[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .price_discount[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  color: #00A859;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .price_discount[_ngcontent-%COMP%]   .charater[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #8E8E8E;\n  border: 1px solid;\n  width: 5rem;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 16px 24px 0px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #feature_item[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  padding-right: 8px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #feature_item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 9%;\n  width: 24px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #feature_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 91%;\n  white-space: normal;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 0px 32px;\n}\n.ant-table-body[_ngcontent-%COMP%]   .layout_item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 130px;\n  height: 40px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJRO0VBQ0ksK0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBeEJaO0FBeUJZO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQXZCaEI7QUF5Qlk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXZCaEI7QUF5Qlk7RUFDSSxrQkFBQTtBQXZCaEI7QUF3QmdCO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF0QnBCO0FBd0JnQjtFQUNJLGlCQUFBO0FBdEJwQjtBQXlCWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQXZCaEI7QUF5Qlk7RUFDSSxxQkFBQTtBQXZCaEI7QUF3QmdCO0VBQ0ksYUFBQTtBQXRCcEI7QUF5QmdCO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBdkJwQjtBQXdCb0I7RUFDSSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBdEJ4QjtBQXdCb0I7RUFDSSxVQUFBO0VBRUEsbUJBQUE7QUF2QnhCO0FBMkJZO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQXpCaEI7QUEwQmdCO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXhCcEIiLCJmaWxlIjoicGFja2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbnQtdGFibGUtYm9keSB7XHJcbiAgICAubGF5b3V0X2l0ZW0ge1xyXG4gICAgICAgIC8vICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIC8vICAgICAuaXRlbSB7XHJcbiAgICAgICAgLy8gICAgICAgICB3aWR0aDogNzMlO1xyXG4gICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgLy8gICAgICAgICAudGl0bGUge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIG1hcmdpbjogMTZweCAwcHggMHB4IDIwcHg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgI2ZlYXR1cmVfaXRlbSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMHB4IDIycHg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA0cHggOHB4ICM4ODg4ODg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDQ2cHggMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOEU4RThFO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByaWNlX2Rpc2NvdW50IHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5udW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBBODU5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNoYXJhdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzhFOEU4RTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDI0cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgLmZlYXR1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjZmVhdHVyZV9pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkxJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwcHggMzJweDtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 77099:
/*!****************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/developers/online-payment/component/popup-package/popup-package.component.ts ***!
  \****************************************************************************************************************/
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
        console.log('Button ok clicked!');
        this.isVisible = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
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

/***/ 49327:
/*!*****************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/developers/online-payment/online-payment.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlinePaymentComponent": () => (/* binding */ OnlinePaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _component_package_package_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/package/package.component */ 43767);
/* harmony import */ var _component_extended_features_extended_features_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/extended-features/extended-features.component */ 75912);





class OnlinePaymentComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OnlinePaymentComponent.ɵfac = function OnlinePaymentComponent_Factory(t) { return new (t || OnlinePaymentComponent)(); };
OnlinePaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OnlinePaymentComponent, selectors: [["app-online-payment"]], decls: 19, vars: 0, consts: [[1, "ant-table-body"], ["nz-row", "", 1, "ant-table-body"], ["nz-col", "", "nzSpan", "24", 1, "main"], [1, "background"], [1, "title"], [1, "sub"], [1, "package"], [1, "extended-feeatures"]], template: function OnlinePaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "G\u00F3i ph\u1EA7n m\u1EC1m \u01B0u \u0111\u00E3i, kh\u00F4ng gi\u1EDBi h\u1EA1n t\u00EDnh n\u0103ng s\u1EED d\u1EE5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Gi\u00E1 ch\u1EC9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "2.000\u0111/");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " ng\u00E0y (ti\u1EBFt ki\u1EC7m \u0111\u1EBFn 70%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-package");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Mi\u1EC5n ph\u00ED c\u00E1c t\u00EDnh n\u0103ng m\u1EDF r\u1ED9ng c\u1EE7a ph\u1EA7n m\u1EC1m");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-extended-features");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, _component_package_package_component__WEBPACK_IMPORTED_MODULE_0__.PackageComponent, _component_extended_features_extended_features_component__WEBPACK_IMPORTED_MODULE_1__.ExtendedFeaturesComponent], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  margin-top: 30px;\n  height: 95%;\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(180deg, #d1f1d2 0%, var(--unnamed-color-ffffff) 100%) 0% 0% no-repeat padding-box;\n  background: transparent linear-gradient(180deg, #d1f1d2 0%, #ffffff 100%) 0% 0% no-repeat padding-box;\n  opacity: 1;\n  height: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 24px;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem !important;\n  color: #373737 !important;\n  font-weight: inherit;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  text-align: center;\n  letter-spacing: NaNpx;\n  color: #0282bb;\n  opacity: 1;\n  font-size: 2.5rem;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .extended-feeatures[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 24px;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .extended-feeatures[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%] {\n  padding: 16px 16px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ubGluZS1wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRVE7RUFDSSxtQkFBQTtBQUFaO0FBQ1k7RUFDSSx5SEFBQTtFQUNBLHFHQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDaEI7QUFBZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRXBCO0FBRG9CO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBR3hCO0FBRG9CO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFHeEI7QUFFZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQXBCO0FBQ29CO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUN4QjtBQUdZO0VBQ0ksc0JBQUE7QUFEaEIiLCJmaWxlIjoib25saW5lLXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuYW50LXRhYmxlLWJvZHkge1xyXG4gICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2QxZjFkMiAwJSwgdmFyKC0tdW5uYW1lZC1jb2xvci1mZmZmZmYpIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNkMWYxZDIgMCUsICNmZmZmZmYgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNzVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzNzM3MzcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBOYU5weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMjgyYmI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZXh0ZW5kZWQtZmVlYXR1cmVzIHtcclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGFja2FnZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 76943:
/*!**************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/developers/online-payment/online-payment.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlinePaymentModule": () => (/* binding */ OnlinePaymentModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _online_payment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./online-payment.component */ 49327);
/* harmony import */ var _component_package_package_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/package/package.component */ 43767);
/* harmony import */ var _component_extended_features_extended_features_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/extended-features/extended-features.component */ 75912);
/* harmony import */ var _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/card/card.component */ 11083);
/* harmony import */ var _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-detail/payment-detail.component */ 98906);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _component_popup_package_popup_package_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/popup-package/popup-package.component */ 77099);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _component_qr_banking_modal_qr_banking_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/qr-banking-modal/qr-banking-modal.component */ 40480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
















const routes = [
    {
        path: '',
        component: _online_payment_component__WEBPACK_IMPORTED_MODULE_0__.OnlinePaymentComponent
    },
    {
        path: 'detail',
        component: _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_4__.PaymentDetailComponent
    }
];
class OnlinePaymentModule {
}
OnlinePaymentModule.ɵfac = function OnlinePaymentModule_Factory(t) { return new (t || OnlinePaymentModule)(); };
OnlinePaymentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: OnlinePaymentModule });
OnlinePaymentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_6__.NgZorroAntModule,
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule,
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](OnlinePaymentModule, { declarations: [_online_payment_component__WEBPACK_IMPORTED_MODULE_0__.OnlinePaymentComponent, _component_package_package_component__WEBPACK_IMPORTED_MODULE_1__.PackageComponent, _component_extended_features_extended_features_component__WEBPACK_IMPORTED_MODULE_2__.ExtendedFeaturesComponent, _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _payment_detail_payment_detail_component__WEBPACK_IMPORTED_MODULE_4__.PaymentDetailComponent, _component_popup_package_popup_package_component__WEBPACK_IMPORTED_MODULE_5__.PopupPackageComponent, _component_qr_banking_modal_qr_banking_modal_component__WEBPACK_IMPORTED_MODULE_7__.QrBankingModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_6__.NgZorroAntModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule] }); })();


/***/ }),

/***/ 98906:
/*!********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/developers/online-payment/payment-detail/payment-detail.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailComponent": () => (/* binding */ PaymentDetailComponent)
/* harmony export */ });
/* harmony import */ var _component_qr_banking_modal_qr_banking_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/qr-banking-modal/qr-banking-modal.component */ 40480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


















function PaymentDetailComponent_div_6_ng_container_33_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 37);
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", item_r8._id)("nzLabel", item_r8.name);
} }
function PaymentDetailComponent_div_6_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnConfirm", function PaymentDetailComponent_div_6_ng_container_33_Template_a_nzOnConfirm_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const item_r5 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.confirmDelete(item_r5); })("nzOnCancel", function PaymentDetailComponent_div_6_ng_container_33_Template_a_nzOnCancel_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nz-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PaymentDetailComponent_div_6_ng_container_33_Template_nz_select_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const item_r5 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.updateBranchPaymentDetail(item_r5, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, PaymentDetailComponent_div_6_ng_container_33_nz_option_12_Template, 1, 2, "nz-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nz-input-number", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PaymentDetailComponent_div_6_ng_container_33_Template_nz_input_number_ngModelChange_16_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const item_r5 = restoredCtx.$implicit; return item_r5.quantity = $event; })("nzBlur", function PaymentDetailComponent_div_6_ng_container_33_Template_nz_input_number_nzBlur_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const item_r5 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.updateQuantityPaymentDetail(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r5.id_branch);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.listBranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.vhAlgorithm.vhcurrencyunit(item_r5.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, PaymentDetailComponent_div_6_ng_container_33_Template, 20, 10, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx_r0.listDetail)("nzFrontPagination", false)("nzShowPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 11, "Payment package"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 13, "Used time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 15, "Branch applied"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 17, "Branch can be changed if not activated yet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 19, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 21, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 23, "Total_amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r3.data);
} }
function PaymentDetailComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Thu\u1EBF: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "b", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.paymentCurrent.tax);
} }
function PaymentDetailComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " T\u1ED5ng ti\u1EC1n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "b", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.vhAlgorithm.vhcurrencyunit_symbol(ctx_r2.total), "");
} }
class PaymentDetailComponent {
    constructor(router, vhQueryCafe, vhAlgorithm, vhComponent, vhAuth, cdRef, datePipe, location, nzModalService) {
        this.router = router;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.vhAuth = vhAuth;
        this.cdRef = cdRef;
        this.datePipe = datePipe;
        this.location = location;
        this.nzModalService = nzModalService;
        this.listDetail = [];
        this.popupPackage = false;
        this.rank = 0;
        this.listBranch = this.vhQueryCafe.getlocalBranchs();
        this.stateData = this.router.getCurrentNavigation().extras.state;
        if (this.stateData.payment_exist) {
            // stateData là 1 object payment đã tồn tại
            this.vhComponent.showLoading('').then(() => {
                this.vhQueryCafe
                    .getPayments({
                    payment_type: { $eq: 5 },
                }, {}, {}, 1)
                    .then((payments) => {
                    this.paymentCurrent = payments[0];
                    this.getListPaymentDetail(payments[0]);
                });
            });
        }
        else {
            console.log(this.stateData);
            //  state này 1 id_package vừa chọn
            this.getPackageById(this.stateData.id_package); //  state lúc này là id
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
        this.vhQueryCafe.deletePayment_Detail(payment_detail._id).then((bool) => {
            // if(payment_detail.promotion.length>0){
            //   payment_detail.promotion.forEach(element => {
            //     this.vhQueryCafe.deletePayment_Detail(element._id)
            //     .then(()=>{
            // this.getListPaymentDetail(this.paymentCurrent);
            this.listDetail = this.listDetail.filter((item) => item._id != payment_detail._id);
            this.vhComponent.hideLoading(0);
            this.setTotal();
            //     })
            //   });
            // }
        });
    }
    // xóa payment
    deletePayment() {
        this.vhQueryCafe.deletePayment(this.paymentCurrent._id).then((response) => {
            this.gotoBeforePage();
            this.vhComponent.hideLoading(0);
        }, (error) => {
        });
    }
    /** thực hiện lấy thông tin gói đã chọn với id được truyền vào
      @param id_package  id của gói đã chọn
    */
    getPackageById(id_package) {
        console.log(id_package);
        Promise.all([
            this.vhQueryCafe.getPackage(id_package),
            this.vhQueryCafe.getPayments({
                payment_type: { $eq: 5 },
            }, {}, {}, 1),
        ]).then(([packageResponse, payment]) => {
            console.log(packageResponse);
            console.log(payment);
            if (this.stateData.is_affiliate) {
            }
            if (payment.length == 0) {
                this.createPayment(packageResponse);
            }
            else {
                this.paymentCurrent = payment[0];
                this.updatePayment(packageResponse, payment[0]);
            }
        });
    }
    /** thêm gói payment mới
     *
     * @param packageResponse
     */
    createPayment(packageResponse) {
        let data = {
            date: new Date(),
            payment_type: 5,
            tax: 0,
            total: 0,
        };
        this.vhQueryCafe.createPayment(data).then((payment) => {
            this.paymentCurrent = payment;
            let payment_detail_main = {
                id_branch: this.vhQueryCafe.getDefaultBranch()._id,
                id_payment: payment._id,
                id_restriction: packageResponse.id_restriction,
                id_package: packageResponse._id,
                package_type: 1,
                day: packageResponse.day,
                tax: 0,
                price: this.stateData.is_affiliate ? this.stateData.price : packageResponse.selling_price,
                quantity: 1,
                payment_detail_type: 1, //1: gói gia hạng mới, 2: gói nâng cấp, 3: gói kéo dài thêm thời gian
            };
            this.vhQueryCafe.createPayment_Detail(payment_detail_main).then((payment_detail) => {
                if (payment_detail) {
                    this.vhComponent.hideLoading(0);
                    this.listDetail = [
                        Object.assign(Object.assign({}, payment_detail), { name_package: packageResponse.name }),
                    ];
                    this.setTotal();
                }
            }, (error) => {
                this.vhComponent.hideLoading(0);
            });
        }, (error) => {
            this.vhComponent.hideLoading(0);
        });
    }
    // Cập nhật payment
    updatePayment(packageResponse, payment) {
        let payment_detail_main = {
            id_branch: this.vhQueryCafe.getDefaultBranch()._id,
            id_payment: payment._id,
            id_restriction: packageResponse.id_restriction,
            id_package: packageResponse._id,
            package_type: 1,
            day: packageResponse.day,
            tax: 0,
            price: this.stateData.is_affiliate ? this.stateData.price : packageResponse.selling_price,
            quantity: 1,
            payment_detail_type: 1, //1: gói gia hạng mới, 2: gói nâng cấp, 3: gói kéo dài thêm thời gian
        };
        this.vhQueryCafe.createPayment_Detail(payment_detail_main).then((payment_detail) => {
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
        this.router.navigate(['/cafe/dashboard/developers/online-payment']);
    }
    // cập nhật chi nhánh  payment_detail và các promotion của payment_detail đấy
    updateBranchPaymentDetail(item, event) {
        this.vhComponent.showLoading('');
        let id_branch = event;
        let dataUpdate = {
            id_branch: id_branch,
        };
        this.vhQueryCafe
            .updatePayment_Detail(item._id, dataUpdate)
            .then((response) => {
            item.id_branch = event;
            this.vhComponent.hideLoading(0);
            // if(item.promotion.length>0){
            //   item.promotion.forEach(element => {
            //     this.vhQueryCafe.updatePayment_Detail(element._id,dataUpdate)
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
        this.vhQueryCafe
            .updatePayment(this.paymentCurrent._id, { total: this.total })
            .then((response) => {
            this.vhComponent.hideLoading(0).catch(e => { });
        }, (error) => {
        });
    }
    // cập nhật số lượng payment_detail và các promotion của payment_detail đấy
    updateQuantityPaymentDetail(item) {
        this.vhComponent.showLoading('').then(() => {
            this.vhQueryCafe
                .updatePayment_Detail(item._id, {
                quantity: item.quantity,
            })
                .then((response) => {
                this.setTotal();
            });
        });
    }
    // Tạo thêm payment_detail với package_promotions
    updatePaymentWithPromotion(packageResponse, payment, id_main_package) {
        packageResponse.package_promotions.forEach((element) => {
            this.vhQueryCafe.getPackage(element.id_package).then((response) => {
                let payment_detail_main = {
                    id_branch: this.vhQueryCafe.getDefaultBranch()._id,
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
                this.vhQueryCafe.createPayment_Detail(payment_detail_main).then((payment_detail) => {
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
        this.vhQueryCafe
            .getPayment_details({ id_payment: { $eq: payment._id } }, {}, {}, 0)
            .then((payment_details) => {
            console.log(payment_details);
            this.vhComponent.hideLoading(0);
            if (payment_details.length == 0) {
                this.deletePayment();
            }
            else {
                for (let i in payment_details) {
                    this.vhQueryCafe
                        .getPackage(payment_details[i].id_package)
                        .then((packages) => {
                        payment_details[i].name_package = packages['name'];
                    });
                }
                this.listDetail = payment_details;
                this.setTotal();
            }
        });
    }
    // kiểm tra chi nhánh nếu là gói chính thì true, promotions thì false
    // checkPackage(id_package: string) {
    //   let arr = id_package.split('_')[0];
    //   switch (arr) {
    //     case 'main': {
    //       return true;
    //     }
    //     default: {
    //       return false;
    //     }
    //   }
    // }
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
    cancel() {
    }
    /**
     * xác nhận xóa gói payment
     */
    confirmDelete(item) {
        this.vhComponent.showLoading('');
        if (this.listDetail.length > 1) {
            this.deleteItem(item);
            // this.vhComponent.hideLoading(0);
        }
        else if (this.listDetail.length == 1) {
            this.deleteItem(item);
            this.deletePayment();
            // this.vhComponent.hideLoading(0);
        }
    }
    /**
     * xác nhận hủy toàn bộ gói
     */
    confirmDeletePayment() {
        this.vhComponent.showLoading('');
        this.deletePayment();
    }
    /**
     * mở trang thanh toán VNPay
     */
    gotoVNPay() {
        const screenWidth = window.innerWidth;
        const modalWidth = screenWidth <= 767 ? '90vw' : '60vw';
        this.nzModalService.create({
            nzTitle: 'QR Banking',
            nzContent: _component_qr_banking_modal_qr_banking_modal_component__WEBPACK_IMPORTED_MODULE_0__.QrBankingModalComponent,
            nzFooter: null,
            nzWidth: modalWidth,
            nzComponentParams: {
                total: this.total,
                // total: 2000,
                id_payment: this.paymentCurrent._id
            },
        });
        // // this.vhQueryCafe.createPaymentVnpay(this.total, 'Thanh toan ma hoa don ' + this.paymentCurrent.payment_code, this.paymentCurrent._id, this.location['_platformLocation'].location.href)
        // let orderDescription: string =
        //   'Thanh toan ma hoa don ' + this.paymentCurrent.payment_code;
        // if (this.platform.is('electron')) {
        //   this.vhQueryCafe
        //     .createPaymentVnpay_soft(
        //       this.total,
        //       orderDescription,
        //       this.paymentCurrent._id
        //     )
        //     .then(
        //       (payment_url) => {
        //         this.vhComponent.showLoading('');
        //         electron.shell.openExternal(payment_url);
        //         //Hiện loading chờ ở đây
        //         setTimeout(() => {
        //           //  Sau 15s đóng loading lại và refresh trang lại
        //            this.router.navigate(['/sales/dashboard/overview'])
        //           //  if (this.platform.is("electron"))
        //            this.vhComponent.hideLoading(0)
        //         }, 15000);
        //       },
        //       (error) => {
        //       }
        //     );
        // } else {
        //   this.vhQueryCafe.createPaymentVnpay_web(
        //     this.total,
        //     orderDescription,
        //     this.paymentCurrent._id,
        //     this.location['_platformLocation'].location.href
        //   );
        // }
    }
    formatDate(date) {
        return this.datePipe.transform(date, 'dd/MM/yyyy HH:MM:ss');
    }
}
PaymentDetailComponent.ɵfac = function PaymentDetailComponent_Factory(t) { return new (t || PaymentDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalService)); };
PaymentDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentDetailComponent, selectors: [["app-payment-detail"]], decls: 20, vars: 7, consts: [["id", "content"], ["nz-row", "", 2, "height", "100%"], ["nz-col", "", "nzSpan", "24", "id", "header", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "24", "class", "table-detail ant-table-body", 4, "ngIf"], [1, "payment"], ["id", "button", 1, "buttons"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottom", 1, "btn_red", 3, "nzPopconfirmTitle", "nzOnConfirm", "nzOnCancel"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 1, "left"], [1, "btn_yellow", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline", 1, "left"], [1, "btn_green", 3, "click"], ["nz-icon", "", "nzType", "arrow-right", "nzTheme", "outline", 1, "right"], ["id", "total", "style", "text-align: end;padding-right: 16px", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "table-detail", "ant-table-body"], [3, "nzData", "nzFrontPagination", "nzShowPagination"], ["data", ""], [2, "width", "3%"], ["nzAlign", "left", 2, "width", "15%"], [1, "text-align", 2, "width", "20%"], [2, "align-items", "center", "display", "flex", "justify-content", "center"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", "nz-tooltip", "", 2, "margin-left", "5px", "cursor", "pointer", 3, "nzTooltipTitle"], [1, "text-align", 2, "width", "15%"], [1, "text-align", 2, "width", "10%"], [1, "text-align", 2, "width", "22%"], [4, "ngFor", "ngForOf"], [2, "text-align", "center"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottom", 3, "nzPopconfirmTitle", "nzOnConfirm", "nzOnCancel"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline"], ["nzAlign", "left", 2, "width", "20%"], [1, "green", 2, "width", "15%"], [2, "width", "20%"], ["nzSize", "default", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzAlign", "right", 2, "width", "15%"], [2, "width", "10%"], [3, "ngModel", "nzMin", "nzStep", "ngModelChange", "nzBlur"], ["nzAlign", "right", 2, "width", "22%"], [3, "nzValue", "nzLabel"], ["id", "total", 2, "text-align", "end", "padding-right", "16px"], [2, "margin-left", "8px"], [2, "margin-left", "8px", "color", "#00a859"]], template: function PaymentDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PaymentDetailComponent_div_6_Template, 34, 25, "div", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.listDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPopconfirmTitle", "X\u00E1c nh\u1EADn x\u00F3a \u0111\u01A1n h\u00E0ng?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.total);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_9__.NzPopconfirmDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzCellAlignDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__.NzTooltipDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_16__.NzInputNumberComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 12px;\n  margin-top: 30px;\n  height: 95%;\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n  height: 5%;\n}\nnz-layout[_ngcontent-%COMP%]   .table-detail[_ngcontent-%COMP%] {\n  height: 83%;\n  overflow-y: auto;\n  margin-bottom: 1%;\n}\nnz-layout[_ngcontent-%COMP%]   .table-detail[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .table-detail[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .table-detail[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  text-align: center;\n  border-radius: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .table-detail[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-red);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 12%;\n  border-top: 1px solid lightgrey;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  float: right;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 4px 8px;\n  padding: 16px;\n  font-size: 0.875rem;\n  border: 1px solid;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn_red[_ngcontent-%COMP%] {\n  color: #ff3939;\n  background-color: #fff;\n  border-color: #ff3939;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn_yellow[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ff9f0f;\n  border-color: #ff9f0f;\n}\nnz-layout[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn_green[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00a859;\n  border-color: #00a859;\n}\n.text-align[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.green[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFDUjtBQUNJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUdvQjtFQUNJLGtCQUFBO0FBRHhCO0FBRXdCO0VBQ0ksV0FBQTtBQUE1QjtBQUV3QjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUE1QjtBQUV3QjtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQUE1QjtBQU9JO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTFI7QUFNUTtFQUNJLFlBQUE7QUFKWjtBQUtZO0VBQ0ksdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUhoQjtBQUlnQjtFQUNJLGlCQUFBO0FBRnBCO0FBSWdCO0VBQ0ksZ0JBQUE7QUFGcEI7QUFLWTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBSGhCO0FBS1k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUhoQjtBQUtZO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFIaEI7QUFTQTtFQUNJLDZCQUFBO0FBTko7QUFTQTtFQUNJLDJDQUFBO0FBTkoiLCJmaWxlIjoicGF5bWVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDUlO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWRldGFpbCB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MyU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgICAgICBuei10YWJsZSB7XHJcbiAgICAgICAgICAgIHRib2R5IHtcclxuICAgICAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnotc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYXltZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyJTtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLmJ1dHRvbnMge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDRweCA4cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG5fcmVkIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmYzOTM5O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmMzkzOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuX3llbGxvdyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjlmMGY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZjlmMGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bl9ncmVlbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE4NTk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMGE4NTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0LWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_developers_online-payment_online-payment_module_ts.js.map