"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_design_design-menu_menu-template_menu-template_module_ts"],{

/***/ 23911:
/*!*******************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-menu/menu-template/menu-template.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuTemplateModule": () => (/* binding */ MenuTemplateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: "template1",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template1_template1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template1/template1.module */ 47520)).then(m => m.Template1Module)
    },
    {
        path: "template2",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template2_template2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template2/template2.module */ 39679)).then(m => m.Template2Module)
    },
    {
        path: "template3",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template3_template3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template3/template3.module */ 1581)).then(m => m.Template3Module)
    },
    {
        path: "template4",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template4_template4_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template4/template4.module */ 32362)).then(m => m.Template4Module)
    },
    {
        path: "template5",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template5_template5_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template5/template5.module */ 7076)).then(m => m.Template5Module)
    },
    {
        path: "template6",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template6_template6_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template6/template6.module */ 19306)).then(m => m.Template6Module)
    },
    {
        path: "template7",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template7_template7_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template7/template7.module */ 95810)).then(m => m.Template7Module)
    },
    {
        path: "template8",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template8_template8_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template8/template8.module */ 55366)).then(m => m.Template8Module)
    },
    {
        path: "template9",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template9_template9_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template9/template9.module */ 57185)).then(m => m.Template9Module)
    },
    {
        path: "template10",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template10_template10_m-4f0ab2")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template10/template10.module */ 70602)).then(m => m.Template10Module)
    },
    {
        path: "template11",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template11_template11_m-8d70c2")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template11/template11.module */ 4618)).then(m => m.Template11Module)
    },
    {
        path: "template12",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template12_template12_m-5882b0")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template12/template12.module */ 94986)).then(m => m.Template12Module)
    },
    {
        path: "template13",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template13_template13_m-3f8a6c")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template13/template13.module */ 55733)).then(m => m.Template13Module)
    },
    {
        path: "template14",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template14_template14_m-c342ba")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template14/template14.module */ 63352)).then(m => m.Template14Module)
    },
    {
        path: "template15",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template15_template15_m-0dc742")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template15/template15.module */ 8438)).then(m => m.Template15Module)
    },
    {
        path: "template16",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template16_template16_m-d90afd")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template16/template16.module */ 21592)).then(m => m.Template16Module)
    },
    {
        path: "template17",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template17_template17_m-0a3f19")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template17/template17.module */ 53344)).then(m => m.Template17Module)
    },
    {
        path: "template18",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template18_template18_m-216b8b")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template18/template18.module */ 7858)).then(m => m.Template18Module)
    },
    {
        path: "template19",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template19_template19_m-63e671")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template19/template19.module */ 44006)).then(m => m.Template19Module)
    },
    {
        path: "template20",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template20_template20_m-edddef")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template20/template20.module */ 4871)).then(m => m.Template20Module)
    },
    {
        path: "template21",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template21_template21_m-03704b")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template21/template21.module */ 43715)).then(m => m.Template21Module)
    },
    {
        path: "template22",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template22_template22_m-9c7bf7")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template22/template22.module */ 5975)).then(m => m.Template22Module)
    },
    {
        path: "template23",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template23_template23_m-d24b75")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template23/template23.module */ 66663)).then(m => m.Template23Module)
    },
    {
        path: "template24",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template24_template24_m-9a3fba")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template24/template24.module */ 57572)).then(m => m.Template24Module)
    },
    {
        path: "template25",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template25_template25_m-bee811")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template25/template25.module */ 1292)).then(m => m.Template25Module)
    },
    {
        path: "template26",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template26_template26_m-01666f")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template26/template26.module */ 50159)).then(m => m.Template26Module)
    },
    {
        path: "template27",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template27_template27_m-0576c6")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template27/template27.module */ 93146)).then(m => m.Template27Module)
    },
    {
        path: "template28",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template28_template28_m-b92a89")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template28/template28.module */ 76485)).then(m => m.Template28Module)
    },
    {
        path: "template29",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template29_template29_m-f0a08f")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template29/template29.module */ 61785)).then(m => m.Template29Module)
    },
    {
        path: "template30",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_canLeavePage_ts-src_app_cafe_desktop_menu_management_design_desi-aa54f1"), __webpack_require__.e("src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template30_template30_m-089a1f")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template30/template30.module */ 78544)).then(m => m.Template30Module)
    }
];
class MenuTemplateModule {
}
MenuTemplateModule.ɵfac = function MenuTemplateModule_Factory(t) { return new (t || MenuTemplateModule)(); };
MenuTemplateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuTemplateModule });
MenuTemplateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuTemplateModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_design_design-menu_menu-template_menu-template_module_ts.js.map