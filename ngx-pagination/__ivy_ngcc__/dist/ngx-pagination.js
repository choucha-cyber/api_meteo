import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, EventEmitter, Input, NgModule, Output, Pipe, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function PaginationControlsComponent_ul_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 10);
    ɵngcc0.ɵɵlistener("click", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); ɵngcc0.ɵɵnextContext(3); var _r0 = ɵngcc0.ɵɵreference(1); return ɵngcc0.ɵɵresetView(_r0.previous()); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "span", 11);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r5.previousLabel + " " + ctx_r5.screenReaderPageLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r5.previousLabel, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "span", 11);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.previousLabel, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 7);
    ɵngcc0.ɵɵtemplate(1, PaginationControlsComponent_ul_2_li_1_a_1_Template, 4, 3, "a", 8);
    ɵngcc0.ɵɵtemplate(2, PaginationControlsComponent_ul_2_li_1_span_2_Template, 4, 2, "span", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵclassProp("disabled", _r0.isFirstPage());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", 1 < _r0.getCurrent());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r0.isFirstPage());
} }
function PaginationControlsComponent_ul_2_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 10);
    ɵngcc0.ɵɵlistener("click", function PaginationControlsComponent_ul_2_li_2_a_1_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r14); var page_r9 = ɵngcc0.ɵɵnextContext().$implicit; ɵngcc0.ɵɵnextContext(2); var _r0 = ɵngcc0.ɵɵreference(1); return ɵngcc0.ɵɵresetView(_r0.setCurrent(page_r9.value)); });
    ɵngcc0.ɵɵelementStart(1, "span", 11);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    var page_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r10.screenReaderPageLabel, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(page_r9.label);
} }
function PaginationControlsComponent_ul_2_li_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div")(1, "span", 11);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    var page_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r11.screenReaderCurrentLabel, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(page_r9.label);
} }
function PaginationControlsComponent_ul_2_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtemplate(1, PaginationControlsComponent_ul_2_li_2_a_1_Template, 5, 2, "a", 8);
    ɵngcc0.ɵɵtemplate(2, PaginationControlsComponent_ul_2_li_2_div_2_Template, 5, 2, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r9 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵclassProp("current", _r0.getCurrent() === page_r9.value);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r0.getCurrent() !== page_r9.value);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r0.getCurrent() === page_r9.value);
} }
function PaginationControlsComponent_ul_2_li_3_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 10);
    ɵngcc0.ɵɵlistener("click", function PaginationControlsComponent_ul_2_li_3_a_1_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); ɵngcc0.ɵɵnextContext(3); var _r0 = ɵngcc0.ɵɵreference(1); return ɵngcc0.ɵɵresetView(_r0.next()); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "span", 11);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    var ctx_r17 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r17.nextLabel + " " + ctx_r17.screenReaderPageLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r17.nextLabel, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r17.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "span", 11);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    var ctx_r18 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r18.nextLabel, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r18.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 12);
    ɵngcc0.ɵɵtemplate(1, PaginationControlsComponent_ul_2_li_3_a_1_Template, 4, 3, "a", 8);
    ɵngcc0.ɵɵtemplate(2, PaginationControlsComponent_ul_2_li_3_span_2_Template, 4, 2, "span", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵclassProp("disabled", _r0.isLastPage());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !_r0.isLastPage());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r0.isLastPage());
} }
function PaginationControlsComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 3);
    ɵngcc0.ɵɵtemplate(1, PaginationControlsComponent_ul_2_li_1_Template, 3, 4, "li", 4);
    ɵngcc0.ɵɵtemplate(2, PaginationControlsComponent_ul_2_li_2_Template, 3, 4, "li", 5);
    ɵngcc0.ɵɵtemplate(3, PaginationControlsComponent_ul_2_li_3_Template, 3, 4, "li", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r1.screenReaderPaginationLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.directionLinks);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", _r0.pages);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.directionLinks);
} }
var PaginationService = (function () {
    function PaginationService() {
        this.change = new EventEmitter();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
PaginationService.ɵfac = function PaginationService_Factory(t) { return new (t || PaginationService)(); };
PaginationService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: PaginationService, factory: function (t) { return PaginationService.ɵfac(t); } });

    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
PaginatePipe.ɵfac = function PaginatePipe_Factory(t) { return new (t || PaginatePipe)(ɵngcc0.ɵɵdirectiveInject(PaginationService, 16)); };
PaginatePipe.ɵpipe = /*@__PURE__*/ ɵngcc0.ɵɵdefinePipe({ name: "paginate", type: PaginatePipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PaginatePipe, [{
        type: Pipe,
        args: [{
                name: 'paginate',
                pure: false
            }]
    }], function () { return [{ type: PaginationService }]; }, null); })();
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a *ngIf=\"1 < p.getCurrent()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </div>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new EventEmitter();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: Input },],
        'maxSize': [{ type: Input },],
        'directionLinks': [{ type: Input },],
        'autoHide': [{ type: Input },],
        'previousLabel': [{ type: Input },],
        'nextLabel': [{ type: Input },],
        'screenReaderPaginationLabel': [{ type: Input },],
        'screenReaderPageLabel': [{ type: Input },],
        'screenReaderCurrentLabel': [{ type: Input },],
        'pageChange': [{ type: Output },],
    };
PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) { return new (t || PaginationControlsComponent)(); };
PaginationControlsComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: PaginationControlsComponent, selectors: [["pagination-controls"]], inputs: { maxSize: "maxSize", previousLabel: "previousLabel", nextLabel: "nextLabel", screenReaderPaginationLabel: "screenReaderPaginationLabel", screenReaderPageLabel: "screenReaderPageLabel", screenReaderCurrentLabel: "screenReaderCurrentLabel", directionLinks: "directionLinks", autoHide: "autoHide", id: "id" }, outputs: { pageChange: "pageChange" }, decls: 3, vars: 3, consts: [[3, "id", "maxSize", "pageChange"], ["p", "paginationApi"], ["class", "ngx-pagination", "role", "navigation", 4, "ngIf"], ["role", "navigation", 1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [3, "current", 4, "ngFor", "ngForOf"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "click"], [1, "show-for-sr"], [1, "pagination-next"]], template: function PaginationControlsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "pagination-template", 0, 1);
        ɵngcc0.ɵɵlistener("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) { return ctx.pageChange.emit($event); });
        ɵngcc0.ɵɵtemplate(2, PaginationControlsComponent_ul_2_Template, 4, 4, "ul", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵproperty("id", ctx.id)("maxSize", ctx.maxSize);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
    } }, dependencies: function () { return [ɵngcc1.NgForOf, ɵngcc1.NgIf, PaginationControlsDirective]; }, styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PaginationControlsComponent, [{
        type: Component,
        args: [{ selector: 'pagination-controls', template: DEFAULT_TEMPLATE, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }"] }]
    }], function () { return []; }, { maxSize: [{
            type: Input
        }], previousLabel: [{
            type: Input
        }], nextLabel: [{
            type: Input
        }], screenReaderPaginationLabel: [{
            type: Input
        }], screenReaderPageLabel: [{
            type: Input
        }], screenReaderCurrentLabel: [{
            type: Input
        }], pageChange: [{
            type: Output
        }], directionLinks: [{
            type: Input
        }], autoHide: [{
            type: Input
        }], id: [{
            type: Input
        }] }); })();
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new EventEmitter();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: ChangeDetectorRef, },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: Input },],
        'maxSize': [{ type: Input },],
        'pageChange': [{ type: Output },],
    };
PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) { return new (t || PaginationControlsDirective)(ɵngcc0.ɵɵdirectiveInject(PaginationService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PaginationControlsDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: PaginationControlsDirective, selectors: [["pagination-template"], ["", "pagination-template", ""]], inputs: { maxSize: "maxSize", id: "id" }, outputs: { pageChange: "pageChange" }, exportAs: ["paginationApi"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PaginationControlsDirective, [{
        type: Directive,
        args: [{
                selector: 'pagination-template,[pagination-template]',
                exportAs: 'paginationApi'
            }]
    }], function () { return [{ type: PaginationService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { maxSize: [{
            type: Input
        }], pageChange: [{
            type: Output
        }], id: [{
            type: Input
        }] }); })();
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
NgxPaginationModule.ɵfac = function NgxPaginationModule_Factory(t) { return new (t || NgxPaginationModule)(); };
NgxPaginationModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxPaginationModule });
NgxPaginationModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [PaginationService], imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxPaginationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [
                    PaginatePipe,
                    PaginationControlsComponent,
                    PaginationControlsDirective
                ],
                providers: [PaginationService],
                exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxPaginationModule, { declarations: function () { return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]; } }); })();
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DEFAULT_STYLES as ɵb, DEFAULT_TEMPLATE as ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhZ2luYXRpb24uanMiLCJzb3VyY2VzIjpbIm5neC1wYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQU1NO0FBQ047QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OzsyRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVNNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQU1NO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztvQkFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVlNO0FBQ047QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7dVlBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ01vZHVsZSwgT3V0cHV0LCBQaXBlLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxudmFyIFBhZ2luYXRpb25TZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb25TZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzID0ge307XHJcbiAgICAgICAgdGhpcy5ERUZBVUxUX0lEID0gJ0RFRkFVTFRfUEFHSU5BVElPTl9JRCc7XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuZGVmYXVsdElkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5ERUZBVUxUX0lEOyB9O1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5pZCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5pZCA9IHRoaXMuREVGQVVMVF9JRDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdID0gaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaW5zdGFuY2UuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZWQgPSB0aGlzLnVwZGF0ZUluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaW5zdGFuY2UuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgZWFjaCBwcm9wZXJ0eSBvZiB0aGUgaW5zdGFuY2UgYW5kIHVwZGF0ZSBhbnkgdGhhdCBoYXZlIGNoYW5nZWQuIFJldHVyblxyXG4gICAgICogdHJ1ZSBpZiBhbnkgY2hhbmdlcyB3ZXJlIG1hZGUsIGVsc2UgcmV0dXJuIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUudXBkYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZVtwcm9wXSAhPT0gdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdW3Byb3BdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF1bcHJvcF0gPSBpbnN0YW5jZVtwcm9wXTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBwYWdlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLmdldEN1cnJlbnRQYWdlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbaWRdLmN1cnJlbnRQYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5zZXRDdXJyZW50UGFnZSA9IGZ1bmN0aW9uIChpZCwgcGFnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0pIHtcclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbaWRdO1xyXG4gICAgICAgICAgICB2YXIgbWF4UGFnZSA9IE1hdGguY2VpbChpbnN0YW5jZS50b3RhbEl0ZW1zIC8gaW5zdGFuY2UuaXRlbXNQZXJQYWdlKTtcclxuICAgICAgICAgICAgaWYgKHBhZ2UgPD0gbWF4UGFnZSAmJiAxIDw9IHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2lkXS5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGluc3RhbmNlLnRvdGFsSXRlbXNcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnNldFRvdGFsSXRlbXMgPSBmdW5jdGlvbiAoaWQsIHRvdGFsSXRlbXMpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdICYmIDAgPD0gdG90YWxJdGVtcykge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1tpZF0udG90YWxJdGVtcyA9IHRvdGFsSXRlbXM7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGluc3RhbmNlLml0ZW1zUGVyUGFnZS5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnNldEl0ZW1zUGVyUGFnZSA9IGZ1bmN0aW9uIChpZCwgaXRlbXNQZXJQYWdlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1tpZF0uaXRlbXNQZXJQYWdlID0gaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgY2xvbmUgb2YgdGhlIHBhZ2luYXRpb24gaW5zdGFuY2Ugb2JqZWN0IG1hdGNoaW5nIHRoZSBpZC4gSWYgbm9cclxuICAgICAqIGlkIHNwZWNpZmllZCwgcmV0dXJucyB0aGUgaW5zdGFuY2UgY29ycmVzcG9uZGluZyB0byB0aGUgZGVmYXVsdCBpZC5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSB0aGlzLkRFRkFVTFRfSUQ7IH1cclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb25lKHRoaXMuaW5zdGFuY2VzW2lkXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBzaGFsbG93IGNsb25lIG9mIGFuIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBvYmpbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGFnaW5hdGlvblNlcnZpY2U7XHJcbn0oKSk7XG5cbnZhciBMQVJHRV9OVU1CRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxudmFyIFBhZ2luYXRlUGlwZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYWdpbmF0ZVBpcGUoc2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHZhbHVlcyBmcm9tIHRoZSBsYXN0IHRpbWUgdGhlIHBpcGUgd2FzIGludm9rZWRcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBhcmdzKSB7XHJcbiAgICAgICAgLy8gV2hlbiBhbiBvYnNlcnZhYmxlIGlzIHBhc3NlZCB0aHJvdWdoIHRoZSBBc3luY1BpcGUsIGl0IHdpbGwgb3V0cHV0XHJcbiAgICAgICAgLy8gYG51bGxgIHVudGlsIHRoZSBzdWJzY3JpcHRpb24gcmVzb2x2ZXMuIEluIHRoaXMgY2FzZSwgd2Ugd2FudCB0b1xyXG4gICAgICAgIC8vIHVzZSB0aGUgY2FjaGVkIGRhdGEgZnJvbSB0aGUgYHN0YXRlYCBvYmplY3QgdG8gcHJldmVudCB0aGUgTmdGb3JcclxuICAgICAgICAvLyBmcm9tIGZsYXNoaW5nIGVtcHR5IHVudGlsIHRoZSByZWFsIHZhbHVlcyBhcnJpdmUuXHJcbiAgICAgICAgaWYgKGFyZ3MgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAvLyBjb21wYXRpYmxlIHdpdGggYW5ndWxhcjIgYmVmb3JlIGJldGExNlxyXG4gICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEoY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICB2YXIgX2lkID0gYXJncy5pZCB8fCB0aGlzLnNlcnZpY2UuZGVmYXVsdElkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVtfaWRdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtfaWRdLnNsaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlcnZlclNpZGVNb2RlID0gYXJncy50b3RhbEl0ZW1zICYmIGFyZ3MudG90YWxJdGVtcyAhPT0gY29sbGVjdGlvbi5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5jcmVhdGVJbnN0YW5jZShjb2xsZWN0aW9uLCBhcmdzKTtcclxuICAgICAgICB2YXIgaWQgPSBpbnN0YW5jZS5pZDtcclxuICAgICAgICB2YXIgc3RhcnQsIGVuZDtcclxuICAgICAgICB2YXIgcGVyUGFnZSA9IGluc3RhbmNlLml0ZW1zUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2UucmVnaXN0ZXIoaW5zdGFuY2UpO1xyXG4gICAgICAgIGlmICghc2VydmVyU2lkZU1vZGUgJiYgY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHBlclBhZ2UgPSArcGVyUGFnZSB8fCBMQVJHRV9OVU1CRVI7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gKGluc3RhbmNlLmN1cnJlbnRQYWdlIC0gMSkgKiBwZXJQYWdlO1xyXG4gICAgICAgICAgICBlbmQgPSBzdGFydCArIHBlclBhZ2U7XHJcbiAgICAgICAgICAgIHZhciBpc0lkZW50aWNhbCA9IHRoaXMuc3RhdGVJc0lkZW50aWNhbChpZCwgY29sbGVjdGlvbiwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgIGlmIChpc0lkZW50aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbaWRdLnNsaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWNlID0gY29sbGVjdGlvbi5zbGljZShzdGFydCwgZW5kKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKGlkLCBjb2xsZWN0aW9uLCBzbGljZSwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNsaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNhdmUgdGhlIHN0YXRlIGZvciBzZXJ2ZXItc2lkZSBjb2xsZWN0aW9uIHRvIGF2b2lkIG51bGxcclxuICAgICAgICAvLyBmbGFzaCBhcyBuZXcgZGF0YSBsb2Fkcy5cclxuICAgICAgICB0aGlzLnNhdmVTdGF0ZShpZCwgY29sbGVjdGlvbiwgY29sbGVjdGlvbiwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gUGFnaW5hdGlvbkluc3RhbmNlIG9iamVjdCwgdXNpbmcgZGVmYXVsdHMgZm9yIGFueSBvcHRpb25hbCBwcm9wZXJ0aWVzIG5vdCBzdXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGVQaXBlLnByb3RvdHlwZS5jcmVhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBhcmdzKSB7XHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IGFyZ3M7XHJcbiAgICAgICAgdGhpcy5jaGVja0NvbmZpZyhjb25maWcpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBjb25maWcuaWQgfHwgdGhpcy5zZXJ2aWNlLmRlZmF1bHRJZCgpLFxyXG4gICAgICAgICAgICBpdGVtc1BlclBhZ2U6ICtjb25maWcuaXRlbXNQZXJQYWdlIHx8IDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiArY29uZmlnLmN1cnJlbnRQYWdlIHx8IDEsXHJcbiAgICAgICAgICAgIHRvdGFsSXRlbXM6ICtjb25maWcudG90YWxJdGVtcyB8fCBjb2xsZWN0aW9uLmxlbmd0aFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCB0byB0aGUgZmlsdGVyIGNvbnRhaW5zIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLmNoZWNrQ29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHZhciByZXF1aXJlZCA9IFsnaXRlbXNQZXJQYWdlJywgJ2N1cnJlbnRQYWdlJ107XHJcbiAgICAgICAgdmFyIG1pc3NpbmcgPSByZXF1aXJlZC5maWx0ZXIoZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuICEocHJvcCBpbiBjb25maWcpOyB9KTtcclxuICAgICAgICBpZiAoMCA8IG1pc3NpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhZ2luYXRlUGlwZTogQXJndW1lbnQgaXMgbWlzc2luZyB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIHByb3BlcnRpZXM6IFwiICsgbWlzc2luZy5qb2luKCcsICcpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUbyBhdm9pZCByZXR1cm5pbmcgYSBicmFuZCBuZXcgYXJyYXkgZWFjaCB0aW1lIHRoZSBwaXBlIGlzIHJ1biwgd2Ugc3RvcmUgdGhlIHN0YXRlIG9mIHRoZSBzbGljZWRcclxuICAgICAqIGFycmF5IGZvciBhIGdpdmVuIGlkLiBUaGlzIG1lYW5zIHRoYXQgdGhlIG5leHQgdGltZSB0aGUgcGlwZSBpcyBydW4gb24gdGhpcyBjb2xsZWN0aW9uICYgaWQsIHdlIGp1c3RcclxuICAgICAqIG5lZWQgdG8gY2hlY2sgdGhhdCB0aGUgY29sbGVjdGlvbiwgc3RhcnQgYW5kIGVuZCBwb2ludHMgYXJlIGFsbCBpZGVudGljYWwsIGFuZCBpZiBzbywgcmV0dXJuIHRoZVxyXG4gICAgICogbGFzdCBzbGljZWQgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUuc2F2ZVN0YXRlID0gZnVuY3Rpb24gKGlkLCBjb2xsZWN0aW9uLCBzbGljZSwgc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGVbaWRdID0ge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxyXG4gICAgICAgICAgICBzaXplOiBjb2xsZWN0aW9uLmxlbmd0aCxcclxuICAgICAgICAgICAgc2xpY2U6IHNsaWNlLFxyXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXHJcbiAgICAgICAgICAgIGVuZDogZW5kXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEZvciBhIGdpdmVuIGlkLCByZXR1cm5zIHRydWUgaWYgdGhlIGNvbGxlY3Rpb24sIHNpemUsIHN0YXJ0IGFuZCBlbmQgdmFsdWVzIGFyZSBpZGVudGljYWwuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUuc3RhdGVJc0lkZW50aWNhbCA9IGZ1bmN0aW9uIChpZCwgY29sbGVjdGlvbiwgc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGVbaWRdO1xyXG4gICAgICAgIGlmICghc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXNNZXRhRGF0YUlkZW50aWNhbCA9IHN0YXRlLnNpemUgPT09IGNvbGxlY3Rpb24ubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIHN0YXRlLnN0YXJ0ID09PSBzdGFydCAmJlxyXG4gICAgICAgICAgICBzdGF0ZS5lbmQgPT09IGVuZDtcclxuICAgICAgICBpZiAoIWlzTWV0YURhdGFJZGVudGljYWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdGUuc2xpY2UuZXZlcnkoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7IHJldHVybiBlbGVtZW50ID09PSBjb2xsZWN0aW9uW3N0YXJ0ICsgaW5kZXhdOyB9KTtcclxuICAgIH07XHJcbiAgICBQYWdpbmF0ZVBpcGUuZGVjb3JhdG9ycyA9IFtcclxuICAgICAgICB7IHR5cGU6IFBpcGUsIGFyZ3M6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3BhZ2luYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBwdXJlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxdIH0sXHJcbiAgICBdO1xyXG4gICAgLyoqIEBub2NvbGxhcHNlICovXHJcbiAgICBQYWdpbmF0ZVBpcGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXHJcbiAgICAgICAgeyB0eXBlOiBQYWdpbmF0aW9uU2VydmljZSwgfSxcclxuICAgIF07IH07XHJcbiAgICByZXR1cm4gUGFnaW5hdGVQaXBlO1xyXG59KCkpO1xuXG4vKipcclxuICogVGhlIGRlZmF1bHQgdGVtcGxhdGUgYW5kIHN0eWxlcyBmb3IgdGhlIHBhZ2luYXRpb24gbGlua3MgYXJlIGJvcnJvd2VkIGRpcmVjdGx5XHJcbiAqIGZyb20gWnVyYiBGb3VuZGF0aW9uIDY6IGh0dHA6Ly9mb3VuZGF0aW9uLnp1cmIuY29tL3NpdGVzL2RvY3MvcGFnaW5hdGlvbi5odG1sXHJcbiAqL1xyXG52YXIgREVGQVVMVF9URU1QTEFURSA9IFwiXFxuICAgIDxwYWdpbmF0aW9uLXRlbXBsYXRlICAjcD1cXFwicGFnaW5hdGlvbkFwaVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cXFwiaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFttYXhTaXplXT1cXFwibWF4U2l6ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgKHBhZ2VDaGFuZ2UpPVxcXCJwYWdlQ2hhbmdlLmVtaXQoJGV2ZW50KVxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibmd4LXBhZ2luYXRpb25cXFwiIFxcbiAgICAgICAgcm9sZT1cXFwibmF2aWdhdGlvblxcXCIgXFxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cXFwic2NyZWVuUmVhZGVyUGFnaW5hdGlvbkxhYmVsXFxcIiBcXG4gICAgICAgICpuZ0lmPVxcXCIhKGF1dG9IaWRlICYmIHAucGFnZXMubGVuZ3RoIDw9IDEpXFxcIj5cXG5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwicGFnaW5hdGlvbi1wcmV2aW91c1xcXCIgW2NsYXNzLmRpc2FibGVkXT1cXFwicC5pc0ZpcnN0UGFnZSgpXFxcIiAqbmdJZj1cXFwiZGlyZWN0aW9uTGlua3NcXFwiPiBcXG4gICAgICAgICAgICA8YSAqbmdJZj1cXFwiMSA8IHAuZ2V0Q3VycmVudCgpXFxcIiAoY2xpY2spPVxcXCJwLnByZXZpb3VzKClcXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJwcmV2aW91c0xhYmVsICsgJyAnICsgc2NyZWVuUmVhZGVyUGFnZUxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgICAge3sgcHJldmlvdXNMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInAuaXNGaXJzdFBhZ2UoKVxcXCI+XFxuICAgICAgICAgICAgICAgIHt7IHByZXZpb3VzTGFiZWwgfX0gPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJQYWdlTGFiZWwgfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9saT5cXG5cXG4gICAgICAgIDxsaSBbY2xhc3MuY3VycmVudF09XFxcInAuZ2V0Q3VycmVudCgpID09PSBwYWdlLnZhbHVlXFxcIiAqbmdGb3I9XFxcImxldCBwYWdlIG9mIHAucGFnZXNcXFwiPlxcbiAgICAgICAgICAgIDxhIChjbGljayk9XFxcInAuc2V0Q3VycmVudChwYWdlLnZhbHVlKVxcXCIgKm5nSWY9XFxcInAuZ2V0Q3VycmVudCgpICE9PSBwYWdlLnZhbHVlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJQYWdlTGFiZWwgfX0gPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBwYWdlLmxhYmVsIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJwLmdldEN1cnJlbnQoKSA9PT0gcGFnZS52YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyQ3VycmVudExhYmVsIH19IDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgcGFnZS5sYWJlbCB9fTwvc3Bhbj4gXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW5leHRcXFwiIFtjbGFzcy5kaXNhYmxlZF09XFxcInAuaXNMYXN0UGFnZSgpXFxcIiAqbmdJZj1cXFwiZGlyZWN0aW9uTGlua3NcXFwiPlxcbiAgICAgICAgICAgIDxhICpuZ0lmPVxcXCIhcC5pc0xhc3RQYWdlKClcXFwiIChjbGljayk9XFxcInAubmV4dCgpXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwibmV4dExhYmVsICsgJyAnICsgc2NyZWVuUmVhZGVyUGFnZUxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgIHt7IG5leHRMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInAuaXNMYXN0UGFnZSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgIHt7IG5leHRMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2xpPlxcblxcbiAgICA8L3VsPlxcbiAgICA8L3BhZ2luYXRpb24tdGVtcGxhdGU+XFxuICAgIFwiO1xyXG52YXIgREVGQVVMVF9TVFlMRVMgPSBcIlxcbi5uZ3gtcGFnaW5hdGlvbiB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbjo6YmVmb3JlLCAubmd4LXBhZ2luYXRpb246OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgfVxcbiAgLm5neC1wYWdpbmF0aW9uOjphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoOyB9XFxuICAubmd4LXBhZ2luYXRpb24gbGkge1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMC4wNjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAubmd4LXBhZ2luYXRpb24gbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiBhLFxcbiAgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjMGEwYTBhOyBcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAubmd4LXBhZ2luYXRpb24gYTpob3ZlcixcXG4gICAgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjE5OWU4O1xcbiAgICBjb2xvcjogI2ZlZmVmZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkIHtcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBjb2xvcjogI2NhY2FjYTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9IFxcbiAgICAubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIC5lbGxpcHNpczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnXFx1MjAyNic7XFxuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcXG4gICAgY29sb3I6ICMwYTBhMGE7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiBhLCAubmd4LXBhZ2luYXRpb24gYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIGE6OmJlZm9yZSxcXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6OmJlZm9yZSB7IFxcbiAgY29udGVudDogJ1xcdTAwQUInO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07IH1cXG5cXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCBhOjphZnRlcixcXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dC5kaXNhYmxlZDo6YWZ0ZXIge1xcbiAgY29udGVudDogJ1xcdTAwQkInO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTsgfVxcblxcbi5uZ3gtcGFnaW5hdGlvbiAuc2hvdy1mb3Itc3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTsgfVwiO1xuXG4vKipcclxuICogVGhlIGRlZmF1bHQgcGFnaW5hdGlvbiBjb250cm9scyBjb21wb25lbnQuIEFjdHVhbGx5IGp1c3QgYSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIGEgY3VzdG9tIHRlbXBsYXRlLlxyXG4gKi9cclxudmFyIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5tYXhTaXplID0gNztcclxuICAgICAgICB0aGlzLnByZXZpb3VzTGFiZWwgPSAnUHJldmlvdXMnO1xyXG4gICAgICAgIHRoaXMubmV4dExhYmVsID0gJ05leHQnO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuUmVhZGVyUGFnaW5hdGlvbkxhYmVsID0gJ1BhZ2luYXRpb24nO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuUmVhZGVyUGFnZUxhYmVsID0gJ3BhZ2UnO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuUmVhZGVyQ3VycmVudExhYmVsID0gXCJZb3UncmUgb24gcGFnZVwiO1xyXG4gICAgICAgIHRoaXMucGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb25MaW5rcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fYXV0b0hpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcImRpcmVjdGlvbkxpbmtzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbkxpbmtzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uTGlua3MgPSAhIXZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiYXV0b0hpZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXV0b0hpZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hdXRvSGlkZSA9ICEhdmFsdWUgJiYgdmFsdWUgIT09ICdmYWxzZSc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcclxuICAgICAgICB7IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3BhZ2luYXRpb24tY29udHJvbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBERUZBVUxUX1RFTVBMQVRFLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogW0RFRkFVTFRfU1RZTEVTXSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgICAgICAgICAgICAgICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbiAgICAgICAgICAgICAgICB9LF0gfSxcclxuICAgIF07XHJcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3BEZWNvcmF0b3JzID0ge1xyXG4gICAgICAgICdpZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcclxuICAgICAgICAnbWF4U2l6ZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcclxuICAgICAgICAnZGlyZWN0aW9uTGlua3MnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXHJcbiAgICAgICAgJ2F1dG9IaWRlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxyXG4gICAgICAgICdwcmV2aW91c0xhYmVsJzogW3sgdHlwZTogSW5wdXQgfSxdLFxyXG4gICAgICAgICduZXh0TGFiZWwnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXHJcbiAgICAgICAgJ3NjcmVlblJlYWRlclBhZ2luYXRpb25MYWJlbCc6IFt7IHR5cGU6IElucHV0IH0sXSxcclxuICAgICAgICAnc2NyZWVuUmVhZGVyUGFnZUxhYmVsJzogW3sgdHlwZTogSW5wdXQgfSxdLFxyXG4gICAgICAgICdzY3JlZW5SZWFkZXJDdXJyZW50TGFiZWwnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXHJcbiAgICAgICAgJ3BhZ2VDaGFuZ2UnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxyXG4gICAgfTtcclxuICAgIHJldHVybiBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQ7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyB3aGF0IHBvd2VycyBhbGwgcGFnaW5hdGlvbiBjb250cm9scyBjb21wb25lbnRzLCBpbmNsdWRpbmcgdGhlIGRlZmF1bHQgb25lLlxyXG4gKiBJdCBleHBvc2VzIGFuIEFQSSB3aGljaCBpcyBob29rZWQgdXAgdG8gdGhlIFBhZ2luYXRpb25TZXJ2aWNlIHRvIGtlZXAgdGhlIFBhZ2luYXRlUGlwZSBpbiBzeW5jXHJcbiAqIHdpdGggdGhlIHBhZ2luYXRpb24gY29udHJvbHMuXHJcbiAqL1xyXG52YXIgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZShzZXJ2aWNlLCBjaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmID0gY2hhbmdlRGV0ZWN0b3JSZWY7XHJcbiAgICAgICAgdGhpcy5tYXhTaXplID0gNztcclxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3ViID0gdGhpcy5zZXJ2aWNlLmNoYW5nZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuc2VydmljZS5kZWZhdWx0SWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VMaW5rcygpO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBwcmV2aW91cyBwYWdlXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUucHJldmlvdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkSWQoKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5nZXRDdXJyZW50KCkgLSAxKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBuZXh0IHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tWYWxpZElkKCk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50KHRoaXMuZ2V0Q3VycmVudCgpICsgMSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgY3VycmVudCBwYWdlIGlzIGZpcnN0IHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5pc0ZpcnN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50KCkgPT09IDE7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgY3VycmVudCBwYWdlIGlzIGxhc3QgcGFnZVxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmlzTGFzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGFzdFBhZ2UoKSA9PT0gdGhpcy5nZXRDdXJyZW50KCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuc2V0Q3VycmVudCA9IGZ1bmN0aW9uIChwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldEN1cnJlbnRQYWdlKHRoaXMuaWQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCBwYWdlIG51bWJlclxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmdldExhc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbnN0ID0gdGhpcy5zZXJ2aWNlLmdldEluc3RhbmNlKHRoaXMuaWQpO1xyXG4gICAgICAgIGlmIChpbnN0LnRvdGFsSXRlbXMgPCAxKSB7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gdGhlcmUgYXJlIDAgb3IgZmV3ZXIgKGFuIGVycm9yIGNhc2UpIGl0ZW1zLCB0aGVyZSBhcmUgbm8gXCJwYWdlc1wiIGFzIHN1Y2gsXHJcbiAgICAgICAgICAgIC8vIGJ1dCBpdCBtYWtlcyBzZW5zZSB0byBjb25zaWRlciBhIHNpbmdsZSwgZW1wdHkgcGFnZSBhcyB0aGUgbGFzdCBwYWdlLlxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChpbnN0LnRvdGFsSXRlbXMgLyBpbnN0Lml0ZW1zUGVyUGFnZSk7XHJcbiAgICB9O1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5jaGVja1ZhbGlkSWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCkuaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlOiB0aGUgc3BlY2lmaWVkIGlkIFxcXCJcIiArIHRoaXMuaWQgKyBcIlxcXCIgZG9lcyBub3QgbWF0Y2ggYW55IHJlZ2lzdGVyZWQgUGFnaW5hdGlvbkluc3RhbmNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIHBhZ2UgbGlua3MgYW5kIGNoZWNrcyB0aGF0IHRoZSBjdXJyZW50IHBhZ2UgaXMgdmFsaWQuIFNob3VsZCBydW4gd2hlbmV2ZXIgdGhlXHJcbiAgICAgKiBQYWdpbmF0aW9uU2VydmljZS5jaGFuZ2Ugc3RyZWFtIGVtaXRzIGEgdmFsdWUgbWF0Y2hpbmcgdGhlIGN1cnJlbnQgSUQsIG9yIHdoZW4gYW55IG9mIHRoZVxyXG4gICAgICogaW5wdXQgdmFsdWVzIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUudXBkYXRlUGFnZUxpbmtzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCk7XHJcbiAgICAgICAgdmFyIGNvcnJlY3RlZEN1cnJlbnRQYWdlID0gdGhpcy5vdXRPZkJvdW5kQ29ycmVjdGlvbihpbnN0KTtcclxuICAgICAgICBpZiAoY29ycmVjdGVkQ3VycmVudFBhZ2UgIT09IGluc3QuY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRDdXJyZW50KGNvcnJlY3RlZEN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VzID0gX3RoaXMuY3JlYXRlUGFnZUFycmF5KGluc3QuY3VycmVudFBhZ2UsIGluc3QuaXRlbXNQZXJQYWdlLCBpbnN0LnRvdGFsSXRlbXMsIF90aGlzLm1heFNpemUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXMgPSB0aGlzLmNyZWF0ZVBhZ2VBcnJheShpbnN0LmN1cnJlbnRQYWdlLCBpbnN0Lml0ZW1zUGVyUGFnZSwgaW5zdC50b3RhbEl0ZW1zLCB0aGlzLm1heFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB0aGF0IHRoZSBpbnN0YW5jZS5jdXJyZW50UGFnZSBwcm9wZXJ0eSBpcyB3aXRoaW4gYm91bmRzIGZvciB0aGUgY3VycmVudCBwYWdlIHJhbmdlLlxyXG4gICAgICogSWYgbm90LCByZXR1cm4gYSBjb3JyZWN0IHZhbHVlIGZvciBjdXJyZW50UGFnZSwgb3IgdGhlIGN1cnJlbnQgdmFsdWUgaWYgT0suXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUub3V0T2ZCb3VuZENvcnJlY3Rpb24gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgdG90YWxQYWdlcyA9IE1hdGguY2VpbChpbnN0YW5jZS50b3RhbEl0ZW1zIC8gaW5zdGFuY2UuaXRlbXNQZXJQYWdlKTtcclxuICAgICAgICBpZiAodG90YWxQYWdlcyA8IGluc3RhbmNlLmN1cnJlbnRQYWdlICYmIDAgPCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpbnN0YW5jZS5jdXJyZW50UGFnZSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5jdXJyZW50UGFnZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgUGFnZSBvYmplY3RzIHRvIHVzZSBpbiB0aGUgcGFnaW5hdGlvbiBjb250cm9scy5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5jcmVhdGVQYWdlQXJyYXkgPSBmdW5jdGlvbiAoY3VycmVudFBhZ2UsIGl0ZW1zUGVyUGFnZSwgdG90YWxJdGVtcywgcGFnaW5hdGlvblJhbmdlKSB7XHJcbiAgICAgICAgLy8gcGFnaW5hdGlvblJhbmdlIGNvdWxkIGJlIGEgc3RyaW5nIGlmIHBhc3NlZCBmcm9tIGF0dHJpYnV0ZSwgc28gY2FzdCB0byBudW1iZXIuXHJcbiAgICAgICAgcGFnaW5hdGlvblJhbmdlID0gK3BhZ2luYXRpb25SYW5nZTtcclxuICAgICAgICB2YXIgcGFnZXMgPSBbXTtcclxuICAgICAgICB2YXIgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gaXRlbXNQZXJQYWdlKTtcclxuICAgICAgICB2YXIgaGFsZldheSA9IE1hdGguY2VpbChwYWdpbmF0aW9uUmFuZ2UgLyAyKTtcclxuICAgICAgICB2YXIgaXNTdGFydCA9IGN1cnJlbnRQYWdlIDw9IGhhbGZXYXk7XHJcbiAgICAgICAgdmFyIGlzRW5kID0gdG90YWxQYWdlcyAtIGhhbGZXYXkgPCBjdXJyZW50UGFnZTtcclxuICAgICAgICB2YXIgaXNNaWRkbGUgPSAhaXNTdGFydCAmJiAhaXNFbmQ7XHJcbiAgICAgICAgdmFyIGVsbGlwc2VzTmVlZGVkID0gcGFnaW5hdGlvblJhbmdlIDwgdG90YWxQYWdlcztcclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgd2hpbGUgKGkgPD0gdG90YWxQYWdlcyAmJiBpIDw9IHBhZ2luYXRpb25SYW5nZSkge1xyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHZhciBwYWdlTnVtYmVyID0gdGhpcy5jYWxjdWxhdGVQYWdlTnVtYmVyKGksIGN1cnJlbnRQYWdlLCBwYWdpbmF0aW9uUmFuZ2UsIHRvdGFsUGFnZXMpO1xyXG4gICAgICAgICAgICB2YXIgb3BlbmluZ0VsbGlwc2VzTmVlZGVkID0gKGkgPT09IDIgJiYgKGlzTWlkZGxlIHx8IGlzRW5kKSk7XHJcbiAgICAgICAgICAgIHZhciBjbG9zaW5nRWxsaXBzZXNOZWVkZWQgPSAoaSA9PT0gcGFnaW5hdGlvblJhbmdlIC0gMSAmJiAoaXNNaWRkbGUgfHwgaXNTdGFydCkpO1xyXG4gICAgICAgICAgICBpZiAoZWxsaXBzZXNOZWVkZWQgJiYgKG9wZW5pbmdFbGxpcHNlc05lZWRlZCB8fCBjbG9zaW5nRWxsaXBzZXNOZWVkZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9ICcuLi4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBwYWdlTnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhZ2VOdW1iZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhZ2VzO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gdGhlIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZSBvZiBwYWdpbmF0aW9uIGxpbmtzIFtpXSxcclxuICAgICAqIGZpZ3VyZSBvdXQgd2hhdCBwYWdlIG51bWJlciBjb3JyZXNwb25kcyB0byB0aGF0IHBvc2l0aW9uLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmNhbGN1bGF0ZVBhZ2VOdW1iZXIgPSBmdW5jdGlvbiAoaSwgY3VycmVudFBhZ2UsIHBhZ2luYXRpb25SYW5nZSwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIHZhciBoYWxmV2F5ID0gTWF0aC5jZWlsKHBhZ2luYXRpb25SYW5nZSAvIDIpO1xyXG4gICAgICAgIGlmIChpID09PSBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhZ2luYXRpb25SYW5nZSA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgLSBoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzIC0gcGFnaW5hdGlvblJhbmdlICsgaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGFnZSAtIGhhbGZXYXkgKyBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcclxuICAgICAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3BhZ2luYXRpb24tdGVtcGxhdGUsW3BhZ2luYXRpb24tdGVtcGxhdGVdJyxcclxuICAgICAgICAgICAgICAgICAgICBleHBvcnRBczogJ3BhZ2luYXRpb25BcGknXHJcbiAgICAgICAgICAgICAgICB9LF0gfSxcclxuICAgIF07XHJcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcclxuICAgICAgICB7IHR5cGU6IFBhZ2luYXRpb25TZXJ2aWNlLCB9LFxyXG4gICAgICAgIHsgdHlwZTogQ2hhbmdlRGV0ZWN0b3JSZWYsIH0sXHJcbiAgICBdOyB9O1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xyXG4gICAgICAgICdpZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcclxuICAgICAgICAnbWF4U2l6ZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcclxuICAgICAgICAncGFnZUNoYW5nZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZTtcclxufSgpKTtcblxudmFyIE5neFBhZ2luYXRpb25Nb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmd4UGFnaW5hdGlvbk1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIE5neFBhZ2luYXRpb25Nb2R1bGUuZGVjb3JhdG9ycyA9IFtcclxuICAgICAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYWdpbmF0ZVBpcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtQYWdpbmF0aW9uU2VydmljZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogW1BhZ2luYXRlUGlwZSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmVdXHJcbiAgICAgICAgICAgICAgICB9LF0gfSxcclxuICAgIF07XHJcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cclxuICAgIE5neFBhZ2luYXRpb25Nb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcclxuICAgIHJldHVybiBOZ3hQYWdpbmF0aW9uTW9kdWxlO1xyXG59KCkpO1xuXG4vKipcclxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXHJcbiAqL1xuXG5leHBvcnQgeyBERUZBVUxUX1NUWUxFUyBhcyDJtWIsIERFRkFVTFRfVEVNUExBVEUgYXMgybVhLCBOZ3hQYWdpbmF0aW9uTW9kdWxlLCBQYWdpbmF0aW9uU2VydmljZSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUsIFBhZ2luYXRlUGlwZSB9O1xuIl19