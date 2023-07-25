(window["webpackJsonppartnernetwork_partner_5_0_9"] = window["webpackJsonppartnernetwork_partner_5_0_9"] || []).push([["apolloClient"],{

/***/ "../apolloClient.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/src/node/build/react/3.x/entrypoints/shared.js");
/* harmony import */ var _usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__);


var requireEntry = function requireEntry() {
  return __webpack_require__("./react/apolloClient.ts");
};

__webpack_require__.p = Object(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__["getPublicPath"])('partnernetwork.partner@5.0.9');

var _register = Object(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__["register"])(requireEntry, module, 'partnernetwork.partner@5.0.9', 'partnernetwork.partner@5.x', 'apolloClient'),
    renderHotReload = _register.renderHotReload,
    setupHMR = _register.setupHMR;

if (false) { var hotEmitter, hotLog; }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../../../../usr/local/data/service/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./react/apolloClient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@apollo/client/index.js");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/public/index.mjs");


var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]({
    addTypename: false
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  link: Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_1__["createUploadLink"])({
    uri: "".concat(window.location.origin, "/gql")
  })
});

/***/ }),

/***/ "graphql":
/***/ (function(module, exports) {

module.exports = GraphQL;

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = React;

/***/ })

},[["../apolloClient.js","common","vendors~App~IndexApp~apolloClient","vendors~IndexApp~apolloClient"]]]);
//# sourceMappingURL=apolloClient.js.map