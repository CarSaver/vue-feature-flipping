(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.VueFeatureFlipping = {}));
}(this, (function (exports) { 'use strict';

    var enabledFeatures = [];
    /**
     * @param defaut The value to return when `false` if plugin not initialized (list is `null`)
     * @example
     * import { isEnabled } from 'vue-feature-flipping'
     * function sample() {
     *     if (isEnabled('XXXXX')) {
     *         console.log('...')
     *     }
     * }
     */
    function isEnabled(key, defaut) {
        if (defaut === void 0) { defaut = false; }
        return enabledFeatures === null ? defaut : enabledFeatures.includes(key);
    }
    function setEnabledFeatures(features) {
        enabledFeatures = features;
    }

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) { throw t[1]; } return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) { throw new TypeError("Generator is already executing."); }
            while (_) { try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) { return t; }
                if (y = 0, t) { op = [op[0] & 2, t.value]; }
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) { _.ops.pop(); }
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; } }
            if (op[0] & 5) { throw op[1]; } return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
        var arguments$1 = arguments;

        for (var s = 0, i = 0, il = arguments.length; i < il; i++) { s += arguments$1[i].length; }
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            { for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                { r[k] = a[j]; } }
        return r;
    };
    function featureFlippingDirective(el, binding, vnode) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = binding.arg;
                        switch (_a) {
                            case 'class': return [3 /*break*/, 1];
                            case 'style': return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, renderClasses(el, binding)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 3: return [4 /*yield*/, renderStyles(el, binding)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, renderDOM(el, binding, vnode)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * @example
     * <div v-feature-flipping="'XXXXX'">...</div>
     * <div v-feature-flipping.not="'XXXXX'">...</div>
     * <div v-feature-flipping.default="'XXXXX'">...</div>
     */
    function renderDOM(el, binding, vnode) {
        return __awaiter(this, void 0, void 0, function () {
            var key, _a, defaut, _b, not;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        key = binding.value;
                        _a = binding.modifiers, defaut = _a.default, _b = _a.not, not = _b === void 0 ? false : _b;
                        if (!(not ^ !isEnabled(key, defaut))) { return [3 /*break*/, 2]; }
                        return [4 /*yield*/, vnode.context.$nextTick()
                            // @ts-ignore
                        ];
                    case 1:
                        _c.sent();
                        // @ts-ignore
                        vnode.elm.remove();
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * @example
     * <div v-feature-flipping:class="{ key: 'XXXXX', value: 'class1' }">...</div>
     * <div v-feature-flipping:class="{ key: 'XXXXX', value: ['class1', class2'] }">...</div>
     * <div v-feature-flipping:class="{ key: 'XXXXX', value: { class1: active1 } }">...</div>
     * <div v-feature-flipping:class="{ key: 'XXXXX', value: ['class1', ['class2'], { class3: active3 }] }">...</div>
     * <div v-feature-flipping:class.not="{ key: 'XXXXX', value: 'class1' }">...</div>
     * <div v-feature-flipping:class.default="{ key: 'XXXXX', value: 'class1' }">...</div>
     */
    function renderClasses(el, binding) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, key, value, _b, defaut, _c, not;
            return __generator(this, function (_d) {
                _a = binding.value, key = _a.key, value = _a.value;
                _b = binding.modifiers, defaut = _b.default, _c = _b.not, not = _c === void 0 ? false : _c;
                // @ts-ignore
                if (not ^ isEnabled(key, defaut)) {
                    el.className += ' ' + parseClasses(value).join(' ');
                }
                return [2 /*return*/];
            });
        });
    }
    function parseClasses(value) {
        if (typeof value === 'string') {
            return [value];
        }
        else if (Array.isArray(value)) {
            return value.map(function (it) { return parseClasses(it); })
                .reduce(function (acc, arr) { return __spreadArrays(acc, arr); }, []); // Array.flat()
        }
        else if (typeof value === 'object') {
            return Object.entries(value)
                .filter(function (_a) {
                var value = _a[1];
                return !!value;
            })
                .map(function (_a) {
                var key = _a[0];
                return key;
            });
        }
        else {
            throw new Error('Invalid parameter type');
        }
    }
    /**
     * @example
     * <div v-feature-flipping:style="{ key: 'XXXXX', value: { style1: 'value1', style2: 'value2' } }">...</div>
     * <div v-feature-flipping:style="{ key: 'XXXXX', value: [{ style1: 'value1' }, { style2: 'value2' }] }">...</div>
     * <div v-feature-flipping:style.not="{ key: 'XXXXX', value: { style1: 'value1', style2: 'value2' } }">...</div>
     * <div v-feature-flipping:style.default="{ key: 'XXXXX', value: { style1: 'value1', style2: 'value2' } }">...</div>
     */
    function renderStyles(el, binding) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, key, value, _b, defaut, _c, not, _i, _d, _e, styleName, styleValue;
            return __generator(this, function (_f) {
                _a = binding.value, key = _a.key, value = _a.value;
                _b = binding.modifiers, defaut = _b.default, _c = _b.not, not = _c === void 0 ? false : _c;
                // @ts-ignore
                if (not ^ isEnabled(key, defaut)) {
                    for (_i = 0, _d = Object.entries(parseStyles(value)); _i < _d.length; _i++) {
                        _e = _d[_i], styleName = _e[0], styleValue = _e[1];
                        el.style.setProperty(styleName, styleValue);
                    }
                }
                return [2 /*return*/];
            });
        });
    }
    function parseStyles(value) {
        if (Array.isArray(value)) {
            return value.map(function (it) { return parseStyles(it); })
                .reduce(function (it, merged) { return Object.assign(merged, it); }, {}); // merge objects
        }
        else if (typeof value === 'object') {
            return value;
        }
        else {
            throw new Error('Invalid parameter type');
        }
    }

    var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$1 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) { throw t[1]; } return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) { throw new TypeError("Generator is already executing."); }
            while (_) { try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) { return t; }
                if (y = 0, t) { op = [op[0] & 2, t.value]; }
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) { _.ops.pop(); }
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; } }
            if (op[0] & 5) { throw op[1]; } return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    /**
     * @example
     * const router = new VueRouter({
     *     routes: [
     *         { path: '/test1', component: Test1Component, meta: { featureFlipping: { key: 'XXXXX' } } },
     *         { path: '/test2', component: Test2Component, meta: { featureFlipping: { key: 'XXXXX', redirect: '/error' } } },
     *         { path: '/test3', component: Test3Component, meta: { featureFlipping: { key: 'XXXXX', not: true } } },
     *         { path: '/test4', component: Test4Component, meta: { featureFlipping: { key: 'XXXXX', default: true } } },
     *     ]
     * })
     */
    function featureFlippingGuard(to, from, next) {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, key, _b, redirect, defaut, not;
            return __generator$1(this, function (_c) {
                if (to.meta.featureFlipping) {
                    _a = to.meta.featureFlipping, key = _a.key, _b = _a.redirect, redirect = _b === void 0 ? '/' : _b, defaut = _a.default, not = _a.not;
                    // @ts-ignore
                    if (not ^ !isEnabled(key, defaut)) {
                        return [2 /*return*/, next(redirect)];
                    }
                }
                return [2 /*return*/, next()];
            });
        });
    }

    /**
     * @example
     * import Vue from 'vue'
     * import FeatureFlipping from './feature-flipping'
     * Vue.use(FeatureFlipping, {
     *     init: (consumer) => consumer(['FF1', 'FF2', 'FF3'])
     * })
     */
    function featureFlippingPluginInstall(vue, options) {
        options && options.init && options.init(function (it) { return setEnabledFeatures(it); });
        vue.directive('feature-flipping', featureFlippingDirective);
        vue.mixin({ beforeRouteEnter: featureFlippingGuard });
    }

    exports.default = featureFlippingPluginInstall;
    exports.isEnabled = isEnabled;
    exports.setEnabledFeatures = setEnabledFeatures;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
