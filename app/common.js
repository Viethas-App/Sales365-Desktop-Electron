"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["common"],{

/***/ 80631:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 76842);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 99502);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 88910);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 78086:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-1457892a.js */ 11540);



const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (delegate, container, component, cssClasses, componentProps) {
    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};



/***/ }),

/***/ 99502:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 15907:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 43784:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);


const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};

const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }

  return [];
};

const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};

const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

const openURL = /*#__PURE__*/function () {
  var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');

      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }

        return router.push(url, direction, animation);
      }
    }

    return false;
  });

  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ 86126:
/*!*****************************************************!*\
  !*** ./src/app/cafe/desktop/ng-zorro-ant.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgZorroAntModule": () => (/* binding */ NgZorroAntModule)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ 85518);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/alert */ 83015);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 33825);
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ 75530);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);
/* harmony import */ var ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/back-top */ 70446);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/badge */ 9375);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 45589);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/carousel */ 75161);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 92131);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 39370);
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/comment */ 41867);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 39054);
/* harmony import */ var ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ng-zorro-antd/core/trans-button */ 88232);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 60198);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/divider */ 72254);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8709);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/empty */ 36641);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ng-zorro-antd/image */ 77);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 54523);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/mention */ 94747);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/notification */ 8175);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 93730);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/popover */ 8813);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/progress */ 67077);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/rate */ 44054);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ng-zorro-antd/result */ 76588);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 79314);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng-zorro-antd/slider */ 99491);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng-zorro-antd/spin */ 80289);
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ng-zorro-antd/statistic */ 25385);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ng-zorro-antd/steps */ 80366);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 23465);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 4974);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ng-zorro-antd/transfer */ 55753);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ng-zorro-antd/tree */ 60138);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 21821);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ng-zorro-antd/typography */ 87250);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ng-zorro-antd/upload */ 40896);
/* harmony import */ var ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ng-zorro-antd/resizable */ 17321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



































































class NgZorroAntModule {
}
NgZorroAntModule.ɵfac = function NgZorroAntModule_Factory(t) { return new (t || NgZorroAntModule)(); };
NgZorroAntModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgZorroAntModule });
NgZorroAntModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule,
        ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__.NzAffixModule,
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_3__.NzAlertModule,
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_4__.NzAnchorModule,
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_5__.NzAutocompleteModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__.NzAvatarModule,
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_7__.NzBackTopModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__.NzBadgeModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonModule,
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__.NzBreadCrumbModule,
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_11__.NzCalendarModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__.NzCardModule,
        ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__.NzCarouselModule,
        ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_14__.NzCascaderModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__.NzCheckboxModule,
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__.NzCollapseModule,
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_17__.NzCommentModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__.NzDatePickerModule,
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_19__.NzDescriptionsModule,
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__.NzDividerModule,
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_21__.NzDrawerModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_22__.NzDropDownModule,
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_23__.NzEmptyModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_24__.NzFormModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzGridModule,
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_26__.NzI18nModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__.NzInputModule,
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_28__.NzInputNumberModule,
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_29__.NzLayoutModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_30__.NzListModule,
        ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_31__.NzMentionModule,
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_32__.NzMenuModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_33__.NzMessageModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_34__.NzModalModule,
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_35__.NzNoAnimationModule,
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_36__.NzNotificationModule,
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_37__.NzPageHeaderModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_38__.NzPaginationModule,
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_39__.NzPopconfirmModule,
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_40__.NzPopoverModule,
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_41__.NzProgressModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_42__.NzRadioModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_43__.NzRateModule,
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_44__.NzResultModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_45__.NzSelectModule,
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_46__.NzSkeletonModule,
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_47__.NzSliderModule,
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_48__.NzSpinModule,
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_49__.NzStatisticModule,
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_50__.NzStepsModule,
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_51__.NzSwitchModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_52__.NzTableModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_53__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_54__.NzTagModule,
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_55__.NzTimePickerModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_56__.NzTimelineModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_57__.NzToolTipModule,
        ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_58__.NzTransButtonModule,
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_59__.NzTransferModule,
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_60__.NzTreeModule,
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_61__.NzTreeSelectModule,
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_62__.NzTypographyModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_63__.NzUploadModule,
        ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_64__.NzWaveModule,
        ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_65__.NzResizableModule,
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_66__.NzImageModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgZorroAntModule, { exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule,
        ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__.NzAffixModule,
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_3__.NzAlertModule,
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_4__.NzAnchorModule,
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_5__.NzAutocompleteModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__.NzAvatarModule,
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_7__.NzBackTopModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__.NzBadgeModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonModule,
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__.NzBreadCrumbModule,
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_11__.NzCalendarModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__.NzCardModule,
        ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__.NzCarouselModule,
        ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_14__.NzCascaderModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__.NzCheckboxModule,
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__.NzCollapseModule,
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_17__.NzCommentModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__.NzDatePickerModule,
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_19__.NzDescriptionsModule,
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__.NzDividerModule,
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_21__.NzDrawerModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_22__.NzDropDownModule,
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_23__.NzEmptyModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_24__.NzFormModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzGridModule,
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_26__.NzI18nModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__.NzInputModule,
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_28__.NzInputNumberModule,
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_29__.NzLayoutModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_30__.NzListModule,
        ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_31__.NzMentionModule,
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_32__.NzMenuModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_33__.NzMessageModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_34__.NzModalModule,
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_35__.NzNoAnimationModule,
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_36__.NzNotificationModule,
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_37__.NzPageHeaderModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_38__.NzPaginationModule,
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_39__.NzPopconfirmModule,
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_40__.NzPopoverModule,
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_41__.NzProgressModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_42__.NzRadioModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_43__.NzRateModule,
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_44__.NzResultModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_45__.NzSelectModule,
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_46__.NzSkeletonModule,
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_47__.NzSliderModule,
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_48__.NzSpinModule,
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_49__.NzStatisticModule,
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_50__.NzStepsModule,
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_51__.NzSwitchModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_52__.NzTableModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_53__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_54__.NzTagModule,
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_55__.NzTimePickerModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_56__.NzTimelineModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_57__.NzToolTipModule,
        ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_58__.NzTransButtonModule,
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_59__.NzTransferModule,
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_60__.NzTreeModule,
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_61__.NzTreeSelectModule,
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_62__.NzTypographyModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_63__.NzUploadModule,
        ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_64__.NzWaveModule,
        ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_65__.NzResizableModule,
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_66__.NzImageModule] }); })();


/***/ }),

/***/ 3447:
/*!*******************************************************!*\
  !*** ./src/app/cafe/interface/vh-purchase-invoice.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VhPurchaseInvoices": () => (/* binding */ VhPurchaseInvoices)
/* harmony export */ });
class VhPurchaseInvoices {
    constructor(invoice = null, invoiceDetail = []) {
        this.date = new Date();
        this.invoice = {
            payment_type: 1,
            date: this.date.toISOString(),
            id_supplier: null,
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
        if (invoice) {
            this.invoice.bill_code = invoice['bill_code'] ? invoice['bill_code'] : null;
            this.invoice.payment_type = invoice['payment_type'] ? invoice['payment_type'] : 1;
            this.invoice.id_supplier = invoice['id_supplier'] ? invoice['id_supplier'] : null;
            this.invoice.id_branch = invoice['id_branch'] ? invoice['id_branch'] : null;
            this.invoice.id_employee = invoice['id_employee'] ? invoice['id_employee'] : null;
            this.invoice.id_wallet = invoice['id_wallet'] ? invoice['id_wallet'] : 'id_cash';
            this.invoice.total = invoice['total'] ? invoice['total'] : 0;
            this.invoice.payment = invoice['payment'] ? invoice['payment'] : 0;
            this.invoice.tax = invoice['tax'] ? invoice['tax'] : 0;
            this.invoice.discount = invoice['discount'] ? invoice['discount'] : 0;
            this.invoice.fee = invoice['fee'] ? invoice['fee'] : 0;
            this.invoice.bill_type = invoice['bill_type'] ? invoice['bill_type'] : null;
            this.invoice.date = invoice['date'] ? invoice['date'] : this.date.toISOString();
            this.invoice.note = invoice['note'] ? invoice['note'] : '';
            this.invoice._id = invoice['_id'] ? invoice['_id'] : null;
            this.invoiceDetail = invoice['invoiceDetail'] ? invoice['invoiceDetail'] : [];
            this.taxValue = this.invoice.total * (this.invoice.tax / 100);
        }
        if (invoiceDetail) {
            this.invoiceDetail = invoiceDetail;
            this.subTotal = this.invoiceDetail.reduce((prev, next) => prev + next.quantity * next.price, 0);
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
        this.invoice.date = typeof (value) == 'string' ? value : value.toISOString();
    }
    getBillCode() {
        return this.invoice.bill_code;
    }
    getPaymentType() {
        return this.invoice.payment_type;
    }
    setPaymentType(value) {
        this.invoice.payment_type = value;
    }
    getIdPartner() {
        return this.invoice.id_supplier;
    }
    setIdPartner(value) {
        this.invoice.id_supplier = value;
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
    /******************************Xu ly invoice detail *******************************/
    /**Đưa sản phẩm vô danh sách bill detail */
    /**Thêm sản phẩm vô bill detail */
    addInvoiceDetail(value) {
        if (value['id_subproduct']) {
            if (value.lot_number) {
                let index = this.invoiceDetail.findIndex(detail => detail['lot_number'] == value['lot_number']);
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
                let index = this.invoiceDetail.findIndex(detail => detail['lot_number'] == value['lot_number']);
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
    addInvoiceDetailMutilLine(data) {
        this.addBill_Detail(data);
    }
    addBill_Detail(value) {
        this.invoiceDetail.unshift({
            name: value.name,
            id_product: value._id,
            quantity: 1,
            unit: value.unit,
            units: value.units,
            ratio: value.ratio ? value.ratio : 1,
            ptype: value.type,
            price: value.price_import,
            price_origin: value.price_import,
            id_subproduct: value.id_subproduct,
            lots: value.lots,
            lot_number: value.lot_number,
            id_lotproduct: value.id_lotproduct,
            days_import_warning: value.days_import_warning
        });
        this.setSubTotal();
    }
    /**Xóa sản phẩm khỏi danh sách bill detail */
    removeInvoiceDetail(id) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == id);
        if (index != -1) {
            this.invoiceDetail.splice(index, 1);
            this.setSubTotal();
        }
    }
    /**Lấy danh sách bill detail*/
    getInvoiceDetail() {
        return this.invoiceDetail;
    }
    /******************************create - update - delete invoice / detail *******************************/
    /**Lấy thông tin bill để lưu database */
    getCreateUpdateInvoice(bill_type = null) {
        if (bill_type)
            this.setBillType(bill_type);
        return this.invoice;
    }
    /**Lấy danh sách bill detail để lưu database */
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map(item => {
            let detail = {
                id_product: item.id_product,
                price: item.price,
                quantity: item.quantity,
                ptype: item.ptype,
                ratio: item.ratio ? item.ratio : 1,
                price_origin: item.price_origin
            };
            if (item['id_lotproduct'])
                detail['id_lotproduct'] = item.id_lotproduct;
            if (item['id_subproduct'])
                detail['id_subproduct'] = item.id_subproduct;
            return detail;
        });
    }
}


/***/ }),

/***/ 50495:
/*!*********************************!*\
  !*** ./src/app/canLeavePage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanLeavePage": () => (/* binding */ CanLeavePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CanLeavePage {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return component.checkDeactivate(currentRoute, currentState, nextState);
    }
}
CanLeavePage.ɵfac = function CanLeavePage_Factory(t) { return new (t || CanLeavePage)(); };
CanLeavePage.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanLeavePage, factory: CanLeavePage.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 58105:
/*!********************************************************************!*\
  !*** ./src/app/sales/components/bill-detail/bill-detail.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillDetailModule": () => (/* binding */ BillDetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales/sales.component */ 47497);
/* harmony import */ var _customer_return_customer_return_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-return/customer-return.component */ 1774);
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase/purchase.component */ 32274);
/* harmony import */ var _return_supplier_return_supplier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./return-supplier/return-supplier.component */ 57096);
/* harmony import */ var _warranty_warranty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warranty/warranty.component */ 88607);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _openning_stock_openning_stock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./openning-stock/openning-stock.component */ 95042);
/* harmony import */ var _delivery_goods_delivery_goods_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delivery-goods/delivery-goods.component */ 51627);
/* harmony import */ var _recieve_goods_recieve_goods_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recieve-goods/recieve-goods.component */ 47905);
/* harmony import */ var _sales_voucher_sales_voucher_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sales-voucher/sales-voucher.component */ 85554);
/* harmony import */ var _sales_payment_card_sales_payment_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sales-payment-card/sales-payment-card.component */ 94975);
/* harmony import */ var _exchange_voucher_exchange_voucher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exchange-voucher/exchange-voucher.component */ 67079);
/* harmony import */ var _exchange_payment_card_exchange_payment_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exchange-payment-card/exchange-payment-card.component */ 17465);
/* harmony import */ var _destroy_product_destroy_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./destroy-product/destroy-product.component */ 49949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);


















class BillDetailModule {
}
BillDetailModule.ɵfac = function BillDetailModule_Factory(t) { return new (t || BillDetailModule)(); };
BillDetailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: BillDetailModule });
BillDetailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_5__.NgZorroAntModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](BillDetailModule, { declarations: [_sales_sales_component__WEBPACK_IMPORTED_MODULE_0__.SalesComponent,
        _customer_return_customer_return_component__WEBPACK_IMPORTED_MODULE_1__.CustomerReturnComponent,
        _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_2__.PurchaseComponent,
        _return_supplier_return_supplier_component__WEBPACK_IMPORTED_MODULE_3__.ReturnSupplierComponent,
        _warranty_warranty_component__WEBPACK_IMPORTED_MODULE_4__.WarrantyComponent,
        _openning_stock_openning_stock_component__WEBPACK_IMPORTED_MODULE_6__.OpenningStockComponent,
        _delivery_goods_delivery_goods_component__WEBPACK_IMPORTED_MODULE_7__.DeliveryGoodsComponent,
        _recieve_goods_recieve_goods_component__WEBPACK_IMPORTED_MODULE_8__.RecieveGoodsComponent,
        _sales_voucher_sales_voucher_component__WEBPACK_IMPORTED_MODULE_9__.SalesVoucherComponent,
        _sales_payment_card_sales_payment_card_component__WEBPACK_IMPORTED_MODULE_10__.SalesPaymentCardComponent,
        _exchange_voucher_exchange_voucher_component__WEBPACK_IMPORTED_MODULE_11__.ExchangeVoucherComponent,
        _exchange_payment_card_exchange_payment_card_component__WEBPACK_IMPORTED_MODULE_12__.ExchangePaymentCardComponent,
        _destroy_product_destroy_product_component__WEBPACK_IMPORTED_MODULE_13__.DestroyProductComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_5__.NgZorroAntModule], exports: [_sales_sales_component__WEBPACK_IMPORTED_MODULE_0__.SalesComponent,
        _customer_return_customer_return_component__WEBPACK_IMPORTED_MODULE_1__.CustomerReturnComponent,
        _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_2__.PurchaseComponent,
        _return_supplier_return_supplier_component__WEBPACK_IMPORTED_MODULE_3__.ReturnSupplierComponent,
        _warranty_warranty_component__WEBPACK_IMPORTED_MODULE_4__.WarrantyComponent,
        _openning_stock_openning_stock_component__WEBPACK_IMPORTED_MODULE_6__.OpenningStockComponent,
        _delivery_goods_delivery_goods_component__WEBPACK_IMPORTED_MODULE_7__.DeliveryGoodsComponent,
        _recieve_goods_recieve_goods_component__WEBPACK_IMPORTED_MODULE_8__.RecieveGoodsComponent,
        _sales_voucher_sales_voucher_component__WEBPACK_IMPORTED_MODULE_9__.SalesVoucherComponent,
        _sales_payment_card_sales_payment_card_component__WEBPACK_IMPORTED_MODULE_10__.SalesPaymentCardComponent,
        _exchange_voucher_exchange_voucher_component__WEBPACK_IMPORTED_MODULE_11__.ExchangeVoucherComponent,
        _exchange_payment_card_exchange_payment_card_component__WEBPACK_IMPORTED_MODULE_12__.ExchangePaymentCardComponent,
        _destroy_product_destroy_product_component__WEBPACK_IMPORTED_MODULE_13__.DestroyProductComponent] }); })();


/***/ }),

/***/ 1416:
/*!*****************************************************!*\
  !*** ./src/app/sales/services/cleave-js.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleaveJsService": () => (/* binding */ CleaveJsService)
/* harmony export */ });
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js */ 55674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


/**
 * Quản lý các cleavejs instances để tránh memory leak
 */
class CleaveJsService {
    constructor() {
        this.cleaveInstances = new Map();
    }
    /**
     * Tạo cleave instance với selector và options được chỉ định
     * @param selector dùng để xác định element cần tạo cleave instance, sẽ được truyền vào `document.querySelector`
     * @param options các options của `cleave.js`, mặc định nếu không truyền vào là `{ numeral: true, numeralThousandsGroupStyle: 'thousand' }`
     */
    createCleave(selector, options) {
        // Kiểm tra xem có trên DOM không
        if (!document.querySelector(selector)) {
            return;
        }
        // Nếu đã tồn tại thì destroy
        if (this.cleaveInstances.has(selector)) {
            this.destroyCleave(selector);
        }
        // Tạo mới
        const defaultOptions = {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand'
        };
        const finalOptions = Object.assign(Object.assign({}, defaultOptions), options);
        this.cleaveInstances.set(selector, new cleave_js__WEBPACK_IMPORTED_MODULE_0__.default(document.querySelector(selector), finalOptions));
    }
    /**
     * Tạo cleave instance với selectors và options được chỉ định
     * @param selectors dùng để xác định element cần tạo cleave instance, sẽ được truyền vào `document.querySelector`. VD: ['.input1', '.input2']
     * @param options các options của `cleave.js`, mặc định nếu không truyền vào là `{ numeral: true, numeralThousandsGroupStyle: 'thousand' }`
     */
    createCleaves(selectors, options) {
        selectors === null || selectors === void 0 ? void 0 : selectors.forEach((selector) => {
            // Kiểm tra xem có trên DOM không
            if (!document.querySelector(selector)) {
                // console.log(`CleaveJsService: Not found element with selector ${selector}`);
                return;
            }
            // Nếu đã tồn tại thì destroy
            if (this.cleaveInstances.has(selector)) {
                this.destroyCleave(selector);
            }
            // Tạo mới
            const defaultOptions = {
                numeral: true,
                numeralThousandsGroupStyle: 'thousand'
            };
            const finalOptions = Object.assign(Object.assign({}, defaultOptions), options);
            this.cleaveInstances.set(selector, new cleave_js__WEBPACK_IMPORTED_MODULE_0__.default(document.querySelector(selector), finalOptions));
        });
    }
    /**
     * Lấy giá trị khi chưa qua xử lý. Nếu chưa có thì sẽ tự tạo mới
     * @param selector dùng để xác định element cần lấy giá trị, sẽ được truyền vào `document.querySelector`
     * @returns giá trị khi chưa qua xử lý
     */
    getRawValue(selector) {
        if (!this.cleaveInstances.has(selector)) {
            this.createCleave(selector);
        }
        return this.cleaveInstances.get(selector).getRawValue();
    }
    /**
     * Destroy cleave với selector được chỉ định
     * @param selector dùng để xác định element cần destroy, sẽ được truyền vào `document.querySelector`
     */
    destroyCleave(selector) {
        if (this.cleaveInstances.has(selector)) {
            this.cleaveInstances.get(selector).destroy();
            this.cleaveInstances.delete(selector);
        }
    }
    /**
     * Destroy danh sách cleave với mảng selector được chỉ định
     * @param selector dùng để xác định các element cần destroy, sẽ được truyền vào `document.querySelector`
     */
    destroyCleaves(selectors) {
        selectors === null || selectors === void 0 ? void 0 : selectors.forEach((selector) => {
            if (this.cleaveInstances.has(selector)) {
                this.cleaveInstances.get(selector).destroy();
                this.cleaveInstances.delete(selector);
            }
        });
    }
    /**
     * Destroy tất cả cleave instances
     */
    destroyAllCleave() {
        var _a;
        (_a = this.cleaveInstances) === null || _a === void 0 ? void 0 : _a.forEach((cleave) => {
            cleave.destroy();
        });
        this.cleaveInstances.clear();
    }
}
CleaveJsService.ɵfac = function CleaveJsService_Factory(t) { return new (t || CleaveJsService)(); };
CleaveJsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CleaveJsService, factory: CleaveJsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map