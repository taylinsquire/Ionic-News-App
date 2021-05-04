(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".article-anchor {\n  text-decoration: none;\n}\n\nion-icon {\n  font-size: 20px;\n  position: absolute;\n  bottom: 0%;\n  right: 3%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFDRiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlLWFuY2hvciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwJTtcbiAgcmlnaHQ6IDMlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59Il19 */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/news.service */ "Ado8");
/* harmony import */ var _services_saved_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/saved-news.service */ "snKG");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");







let Tab2Page = class Tab2Page {
    constructor(newsService, savedNewsService, authService) {
        this.newsService = newsService;
        this.savedNewsService = savedNewsService;
        this.authService = authService;
        this.currentSearch = '';
        this.currentCategory = '';
        this.stories$ = this.newsService.getStoriesBySearchObservable();
    }
    onCategoryChange(category) {
        this.currentCategory = category;
        this.searchNews(this.currentSearch, category);
    }
    searchNews(search, category = this.currentCategory) {
        this.currentSearch = search;
        this.stories$ = this.newsService.getStoriesBySearchObservable(search, category);
    }
    saveArticle(article) {
        this.savedNewsService.addSavedNews(article);
    }
    signOut() {
        this.authService.signOut();
    }
    articleSaved(article) {
        return this.savedNewsService.isArticleSaved(article);
    }
    imageError(e, article) {
        article.urlToImage = '';
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"] },
    { type: _services_saved_news_service__WEBPACK_IMPORTED_MODULE_5__["SavedNewsService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-auth-firebaseui */ "eJ7z");





const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
        canActivate: [ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]]
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title> Search </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"signOut()\">Sign Out</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Search</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-searchbar (ionChange)=\"searchNews($event.target.value)\"></ion-searchbar>\n  <ion-select\n    placeholder=\"Categories\"\n    (ionChange)=\"onCategoryChange($event.target.value)\"\n  >\n    <ion-select-option value=\"\">All</ion-select-option>\n    <ion-select-option value=\"business\">Business</ion-select-option>\n    <ion-select-option value=\"entertainment\">Entertainment</ion-select-option>\n    <ion-select-option value=\"general\">General</ion-select-option>\n    <ion-select-option value=\"health\">Health</ion-select-option>\n    <ion-select-option value=\"science\">Science</ion-select-option>\n    <ion-select-option value=\"sports\">Sports</ion-select-option>\n    <ion-select-option value=\"technology\">Technology</ion-select-option>\n  </ion-select>\n  <div *ngIf=\"stories$ | async as news\">\n    <ion-grid>\n    <ion-row>\n    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" size-xl=\"4\" *ngFor=\"let article of news.articles\">\n      <ion-card>\n        <a href=\"{{article.url}}\" target=\"blank\" class=\"article-anchor\">\n          <ion-img (ionError)=\"imageError($event, article)\"\n            *ngIf=\"article.urlToImage\"\n            [src]=\"article.urlToImage\"\n          ></ion-img>\n        </a>\n        <ion-card-header>\n          <a href=\"{{article.url}}\" target=\"blank\" class=\"article-anchor\">\n            <ion-card-title>{{ article.title }}</ion-card-title>\n          </a>\n        </ion-card-header>\n\n        <ion-card-content>\n          {{ article.description }}\n          <ion-icon *ngIf=\"articleSaved(article)\"\n            name=\"bookmark\"\n            color=\"primary\"\n            (click)=\"saveArticle(article)\"\n          ></ion-icon>\n          <ion-icon *ngIf=\"!articleSaved(article)\"\n            name=\"bookmark-outline\"\n            (click)=\"saveArticle(article)\"\n          ></ion-icon>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map