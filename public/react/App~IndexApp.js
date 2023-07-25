(window["webpackJsonppartnernetwork_partner_5_0_9"] = window["webpackJsonppartnernetwork_partner_5_0_9"] || []).push([["App~IndexApp"],{

/***/ "./react/App.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vtex_styleguide_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vtex.styleguide/Tab");
/* harmony import */ var vtex_styleguide_Tab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Tab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vtex_styleguide_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vtex.styleguide/Tabs");
/* harmony import */ var vtex_styleguide_Tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vtex.styleguide/PageBlock");
/* harmony import */ var vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_PartnerData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./react/containers/PartnerData/index.tsx");
/* harmony import */ var _containers_PartnerServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./react/containers/PartnerServices/index.tsx");
/* harmony import */ var _containers_PartnerClients__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./react/containers/PartnerClients/index.tsx");
/* harmony import */ var _hooks_usePartnerData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./react/hooks/usePartnerData/index.ts");

// Dependencies




 // Containers



 // Hooks



var App = function App() {
  var _usePartnerData = Object(_hooks_usePartnerData__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      partnerData = _usePartnerData.partnerData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      currentTab = _useState2[0],
      setCurrentTab = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Tab__WEBPACK_IMPORTED_MODULE_2___default.a, {
    active: currentTab === 0,
    onClick: function onClick() {
      return setCurrentTab(0);
    },
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "partnernetwork.app.tab.partnerdata"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variation: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_PartnerData__WEBPACK_IMPORTED_MODULE_6__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Tab__WEBPACK_IMPORTED_MODULE_2___default.a, {
    active: currentTab === 1,
    disabled: !partnerData.id,
    onClick: function onClick() {
      return setCurrentTab(1);
    },
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "partnernetwork.app.tab.services"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variation: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_PartnerServices__WEBPACK_IMPORTED_MODULE_7__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Tab__WEBPACK_IMPORTED_MODULE_2___default.a, {
    active: currentTab === 2,
    disabled: !partnerData.id,
    onClick: function onClick() {
      return setCurrentTab(2);
    },
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "partnernetwork.app.tab.clients"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variation: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_PartnerClients__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./react/components/Select/DropdownIndicator/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Dependencies


var DropdownIndicator = function DropdownIndicator() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml4 flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13.7262 4.39069L8.00211 10.1147L2.27804 4.39069C2.02657 4.14782 1.68977 4.01342 1.34017 4.01646C0.990566 4.0195 0.656145 4.15972 0.408931 4.40694C0.161717 4.65415 0.0214904 4.98856 0.0184525 5.33816C0.0154146 5.68775 0.149809 6.02456 0.392689 6.27603L7.05944 12.9427C7.30948 13.1927 7.64856 13.3331 8.00211 13.3331C8.35567 13.3331 8.69475 13.1927 8.94479 12.9427L15.6115 6.27603C15.7389 6.15303 15.8405 6.0059 15.9103 5.84323C15.9802 5.68056 16.017 5.5056 16.0185 5.32856C16.0201 5.15152 15.9863 4.97595 15.9193 4.81209C15.8523 4.64823 15.7533 4.49936 15.6281 4.37417C15.5029 4.24898 15.354 4.14997 15.1901 4.08293C15.0263 4.01589 14.8507 3.98215 14.6737 3.98369C14.4966 3.98523 14.3217 4.02201 14.159 4.09189C13.9963 4.16177 13.8492 4.26335 13.7262 4.39069Z",
    fill: "#142032"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "16.0002",
    height: "16",
    fill: "white"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (DropdownIndicator);

/***/ }),

/***/ "./react/components/Select/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vtex_styleguide_EXPERIMENTAL_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtex.styleguide/EXPERIMENTAL_Select");
/* harmony import */ var vtex_styleguide_EXPERIMENTAL_Select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_EXPERIMENTAL_Select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DropdownIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./react/components/Select/DropdownIndicator/index.tsx");
/* eslint-disable @typescript-eslint/camelcase */

/* eslint-disable react/jsx-pascal-case */
// Dependencies

 // Components



var Select = function Select(_ref) {
  var value = _ref.value,
      options = _ref.options,
      onChange = _ref.onChange,
      errorMessage = _ref.errorMessage,
      _ref$multi = _ref.multi,
      multi = _ref$multi === void 0 ? true : _ref$multi,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Select...' : _ref$placeholder;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "select-input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_EXPERIMENTAL_Select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: value,
    multi: multi,
    options: options,
    onChange: onChange,
    placeholder: placeholder,
    errorMessage: errorMessage,
    components: {
      DropdownIndicator: _DropdownIndicator__WEBPACK_IMPORTED_MODULE_2__["default"]
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./react/components/Table/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Dependencies


var Table = function Table(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "table mb7 mb8-l"
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./react/components/TableRow/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtex.styleguide/Checkbox");
/* harmony import */ var vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_1__);
// Dependencies



var TableRow = function TableRow(_ref) {
  var name = _ref.name,
      imgURL = _ref.imgURL,
      isActive = _ref.isActive,
      description = _ref.description,
      onCheckboxChange = _ref.onCheckboxChange,
      onButtonRemoveClick = _ref.onButtonRemoveClick,
      _ref$showEmptyImage = _ref.showEmptyImage,
      showEmptyImage = _ref$showEmptyImage === void 0 ? true : _ref$showEmptyImage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr5 mr7-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: name,
    name: name,
    checked: isActive,
    onChange: onCheckboxChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex w-100 items-center"
  }, !imgURL && showEmptyImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "table-row__empty-image mr5"
  }), imgURL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-row__image-container mr5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imgURL,
    alt: name,
    className: "table-row__image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-row__group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "table-row__name"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "table-row__short-description"
  }, description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml5 ml7-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "table-row__button-remove",
    onClick: onButtonRemoveClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M5 7H19",
    stroke: "#142032",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M18 7V18C18 19.105 17.105 20 16 20H8C6.895 20 6 19.105 6 18V7",
    stroke: "#142032",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15 3.75H9",
    stroke: "#142032",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10 11V16",
    stroke: "#142032",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14 11V16",
    stroke: "#142032",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TableRow);

/***/ }),

/***/ "./react/components/Title/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Dependencies


var Title = function Title(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title"
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./react/components/UploadImage/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

// Dependencies


var UploadImage = function UploadImage(_ref) {
  var id = _ref.id,
      error = _ref.error,
      imgURL = _ref.imgURL,
      onImageChange = _ref.onImageChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      url = _useState2[0],
      setURL = _useState2[1];

  var handleOnChange = function handleOnChange(event) {
    var files = event.target.files;

    if ((files === null || files === void 0 ? void 0 : files.length) === 0) {
      setURL('');
      return;
    } // eslint-disable-next-line prefer-destructuring


    var file = files[0];
    var reader = new FileReader();

    reader.onload = function () {
      var newURL = reader.result;
      setURL(newURL);

      if (onImageChange) {
        onImageChange(newURL, file);
      }
    };

    reader.readAsDataURL(file);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (imgURL && imgURL !== url) {
      setURL(imgURL);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [imgURL]);
  var classNames = ['upload-image'];

  if (error) {
    classNames.push('upload-image--error');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classNames.join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: id,
    className: "upload-image-input-label"
  }, url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: url,
    alt: "preview"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: id,
    type: "file",
    accept: ".jpg,jpeg,.png",
    onChange: handleOnChange,
    className: "upload-image-input"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UploadImage);

/***/ }),

/***/ "./react/components/UploadImageContainer/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UploadImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./react/components/UploadImage/index.tsx");
// Dependencies
 // Components



var UploadImageContainer = function UploadImageContainer(_ref) {
  var id = _ref.id,
      title = _ref.title,
      error = _ref.error,
      imgURL = _ref.imgURL,
      errorMessage = _ref.errorMessage,
      description = _ref.description,
      onImageChange = _ref.onImageChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "upload-image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr5 mr7-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UploadImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onImageChange: onImageChange,
    error: error,
    id: id,
    imgURL: imgURL
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column justify-center w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "ma0 mb3 upload-image-container-title"
  }, title), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ma0 upload-image-container-description"
  }, description))), errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vtex-input__error c-danger t-small mt3 lh-title"
  }, errorMessage));
};

/* harmony default export */ __webpack_exports__["default"] = (UploadImageContainer);

/***/ }),

/***/ "./react/containers/PartnerClients/ClientsTable/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vtex.styleguide/Button");
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vtex.styleguide/Spinner");
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@apollo/client/index.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./react/components/Table/index.tsx");
/* harmony import */ var _components_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./react/components/TableRow/index.tsx");
/* harmony import */ var _hooks_usePartnerData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./react/hooks/usePartnerData/index.ts");
/* harmony import */ var _hooks_usePartnerClients__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./react/hooks/usePartnerClients/index.ts");



function _templateObject3() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation updateClient($id: ID, $input: ClientInput) {\n    updateClient(id: $id, input: $input)\n      @context(provider: \"partnernetwork.vtex-services@0.x\") {\n      id\n      name\n      imgURL\n      isActive\n      description\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation saveClients($partnerID: ID, $clients: [ClientInput!]) {\n    saveClients(partnerID: $partnerID, clients: $clients)\n      @context(provider: \"partnernetwork.vtex-services@0.x\") {\n      id\n      name\n      imgURL\n      isActive\n      description\n      accountName\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query getClients($partnerID: ID) {\n    clients(partnerID: $partnerID)\n      @context(provider: \"partnernetwork.vtex-services@0.x\") {\n      id\n      name\n      imgURL\n      isActive\n      description\n      accountName\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}; // Dependencies






 // Components


 // Hooks


 // Queries

var getClientsQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());
var saveClientsQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject2());
var updateClientQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject3());

var ClientsTable = function ClientsTable(_ref) {
  var setShowForm = _ref.setShowForm;

  var _usePartnerData = Object(_hooks_usePartnerData__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      partnerData = _usePartnerData.partnerData;

  var _usePartnerClients = Object(_hooks_usePartnerClients__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      clients = _usePartnerClients.clients,
      addClients = _usePartnerClients.addClients,
      removeClient = _usePartnerClients.removeClient,
      updateClient = _usePartnerClients.updateClient;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(getClientsQuery, {
    variables: {
      partnerID: partnerData.id
    }
  }),
      data = _useQuery.data,
      getLoading = _useQuery.loading;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(saveClientsQuery),
      _useMutation2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      saveClientsMutation = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var _useMutation3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(updateClientQuery),
      _useMutation4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation3, 1),
      updateClientMutation = _useMutation4[0];

  var handleButtonSaveClick = function handleButtonSaveClick() {
    var clientsWithoutImgURL = clients.map(function (client) {
      var imgURL = client.imgURL,
          clientWithoutImgURL = __rest(client, ["imgURL"]);

      return clientWithoutImgURL;
    });
    saveClientsMutation({
      variables: {
        clients: clientsWithoutImgURL,
        partnerID: partnerData.id
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!data || !data.clients || clients.length > 0) return;
    addClients(data.clients); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (getLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "flex justify-center ma6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {
      color: "#f71963",
      size: 50
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, clients && clients.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_7__["default"], null, clients.map(function (client) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: client.id,
      name: client.name,
      imgURL: client.imgURL,
      isActive: client.isActive,
      description: client.description,
      accountName: client.accountName,
      onButtonRemoveClick: function onButtonRemoveClick() {
        var id = client.id,
            imgURL = client.imgURL,
            partialClient = __rest(client, ["id", "imgURL"]);

        updateClientMutation({
          variables: {
            id: id,
            input: Object.assign(Object.assign({}, partialClient), {
              isRemoved: true
            })
          }
        });
        removeClient(id);
      },
      onCheckboxChange: function onCheckboxChange(_ref2) {
        var checked = _ref2.target.checked;
        updateClient(Object.assign(Object.assign({}, client), {
          isActive: checked
        }));
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "actions flex flex-column flex-row-l justify-between-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "button-add-container mb4 mb0-l w-auto-l"
  }, clients.length < 5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: function onClick() {
      return setShowForm(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "partnernetwork.app.button-add-client"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "actions flex flex-column-reverse flex-row-l justify-end-l"
  }, clients.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mb4 mb0-l button-save-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleButtonSaveClick,
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "#FFF",
    size: 20
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "partnernetwork.app.button-save"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ClientsTable);

/***/ }),

/***/ "./react/containers/PartnerClients/NewClientForm/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vtex.styleguide/Input");
/* harmony import */ var vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vtex.styleguide/Checkbox");
/* harmony import */ var vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vtex.styleguide/Button");
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vtex.styleguide/Textarea");
/* harmony import */ var vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vtex.styleguide/Spinner");
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@apollo/client/index.js");
/* harmony import */ var _components_UploadImageContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./react/components/UploadImageContainer/index.tsx");
/* harmony import */ var _hooks_usePartnerData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./react/hooks/usePartnerData/index.ts");
/* harmony import */ var _hooks_usePartnerClients__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./react/hooks/usePartnerClients/index.ts");




function _templateObject() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation createClient($partnerID: ID, $input: ClientInput) {\n    newClient: createClient(partnerID: $partnerID, input: $input) {\n      id\n      name\n      imgURL\n      isActive\n      description\n      accountName\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}; // Dependencies









 // Components

 // Hooks


 // Queries

var createClientQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__["gql"])(_templateObject());
var clientFile;

var NewClientForm = function NewClientForm(_ref) {
  var setShowForm = _ref.setShowForm;

  var _usePartnerData = Object(_hooks_usePartnerData__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      partnerData = _usePartnerData.partnerData;

  var _usePartnerClients = Object(_hooks_usePartnerClients__WEBPACK_IMPORTED_MODULE_13__["default"])(),
      addClient = _usePartnerClients.addClient;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: '',
    imgURL: '',
    description: '',
    isActive: true,
    accountName: ''
  }),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__["useMutation"])(createClientQuery),
      _useMutation2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
      createClient = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      newData = _useMutation2$.data,
      loading = _useMutation2$.loading;

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["useIntl"])();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      clientApproved = _useState6[0],
      setClientApproved = _useState6[1];

  var handleButtonSaveClick = function handleButtonSaveClick() {
    var newErrors = {};
    var name = data.name,
        description = data.description,
        accountName = data.accountName;

    if (!clientApproved) {
      newErrors.clientApproved = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    }

    if (name === '') {
      newErrors.name = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    } else if (name.length < 3) {
      newErrors.name = intl.formatMessage({
        "id": "partnernetwork.app.errors.name"
      });
    }

    if (accountName === '') {
      newErrors.accountName = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    } else if (accountName.length < 3) {
      newErrors.accountName = intl.formatMessage({
        "id": "partnernetwork.app.errors.name"
      });
    }

    if (description === '') {
      newErrors.description = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    } else if (description.length < 10) {
      newErrors.description = intl.formatMessage({
        "id": "partnernetwork.app.errors.description"
      });
    }

    if (JSON.stringify(newErrors) !== '{}') {
      setErrors(newErrors);
      return;
    }

    var imgURL = data.imgURL,
        dataWithoutImgURL = __rest(data, ["imgURL"]);

    createClient({
      variables: {
        partnerID: partnerData.id,
        input: Object.assign(Object.assign({}, dataWithoutImgURL), {
          imgFile: clientFile
        })
      }
    });
  };

  var handleInputChange = function handleInputChange(event) {
    var target = event.target;

    if (target.name in errors) {
      var newErrors = Object.assign({}, errors);
      delete newErrors[target.name];
      setErrors(newErrors);
    }

    setData(function (prevData) {
      return Object.assign(Object.assign({}, prevData), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.name, target.value));
    });
  };

  var inputClientNamePlaceholder = intl.formatMessage({
    "id": "partnernetwork.app.input-client-name.placeholder"
  });
  var inputClientAccountNamePlaceholder = intl.formatMessage({
    "id": "partnernetwork.app.input-client-accountName.placeholder"
  });
  var inputClientDescriptionPlaceholder = intl.formatMessage({
    "id": "partnernetwork.app.input-client-description.placeholder"
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!newData) return;
    addClient(newData.newClient);
    setShowForm(false); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mb8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_UploadImageContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "client-logo",
    onImageChange: function onImageChange(imgURL, file) {
      if (file) {
        clientFile = file;
      }

      setData(function (prevData) {
        return Object.assign(Object.assign({}, prevData), {
          imgURL: imgURL
        });
      });
    },
    title: data.name || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "partnernetwork.app.input-client-name.placeholder"
    }),
    description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "partnernetwork.app.upload-image-recommendation"
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    required: true,
    id: "name",
    name: "name",
    value: data.name,
    onChange: handleInputChange,
    error: errors.name,
    errorMessage: errors.name,
    placeholder: inputClientNamePlaceholder
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "flex mt4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    required: true,
    id: "accountName",
    name: "accountName",
    value: data.accountName,
    onChange: handleInputChange,
    error: errors.accountName,
    errorMessage: errors.accountName,
    placeholder: inputClientAccountNamePlaceholder
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mt4 mb4 mb7-l flex ".concat(errors.clientApproved ? 'check-error' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_5___default.a, {
    checked: clientApproved,
    id: "clientApproved",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "partnernetwork.app.checkClientApproved"
    }),
    name: "clientApproved",
    onChange: function onChange() {
      return setClientApproved(!clientApproved);
    },
    value: clientApproved,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mb7 about-the-client"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "t-heading-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
    id: "partnernetwork.app.about-the-client"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_7___default.a, {
    required: true,
    resize: "none",
    id: "description",
    name: "description",
    value: data.description,
    onChange: handleInputChange,
    error: errors.description,
    errorMessage: errors.description,
    placeholder: inputClientDescriptionPlaceholder
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "actions flex flex-column-reverse flex-row-l justify-end-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mr6-l button-cancel-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onClick: function onClick() {
      return setShowForm(false);
    },
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
    id: "partnernetwork.app.button-cancel"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mb3 mb0-l button-save-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onClick: handleButtonSaveClick,
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "#FFF",
    size: 20
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
    id: "partnernetwork.app.button-save"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewClientForm);

/***/ }),

/***/ "./react/containers/PartnerClients/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NewClientForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./react/containers/PartnerClients/NewClientForm/index.tsx");
/* harmony import */ var _ClientsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./react/containers/PartnerClients/ClientsTable/index.tsx");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./react/components/Title/index.tsx");

// Dependencies

 // Components





var PartnerClients = function PartnerClients() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showForm = _useState2[0],
      setShowForm = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "partnernetwork.app.clients-title"
  })), !showForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ClientsTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setShowForm: setShowForm
  }), showForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewClientForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setShowForm: setShowForm
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PartnerClients);

/***/ }),

/***/ "./react/containers/PartnerData/categories.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
var categories = [{
  id: 'marketing',
  name: 'Marketing',
  subcategories: [{
    id: 'crm',
    name: 'CRM'
  }, {
    id: 'atendimento-ao-cliente',
    name: 'Atendimento ao cliente'
  }, {
    id: 'influenciador(a)',
    name: 'Influenciador(a)'
  }, {
    id: 'busca-e-sugestoes',
    name: 'Busca e sugestões'
  }, {
    id: 'fotos-e-videos',
    name: 'Fotos e Videos'
  }, {
    id: 'automacao-chatbot-ura',
    name: 'Automação (chatbot/URA)'
  }, {
    id: 'reviews',
    name: 'Reviews'
  }, {
    id: 'design-and-ux',
    name: 'Design & UX'
  }]
}, {
  id: 'operacoes-e-fulfillment',
  name: 'Operações e Fulfillment',
  subcategories: [{
    id: 'inventario-armazenamento',
    name: 'Inventário/Armazenamento'
  }, {
    id: 'logistica-transporte',
    name: 'Logística/Transporte'
  }, {
    id: 'erp-gestao-de-catalogo-inventario',
    name: 'ERP - gestão de catalogo/inventário'
  }]
}, {
  id: 'gestao-de-ecommerce',
  name: 'Gestão de Ecommerce',
  subcategories: [{
    id: 'consultoria',
    name: 'Consultoria'
  }, {
    id: 'treinamento-e-certificacao',
    name: 'Treinamento e Certificação'
  }, {
    id: 'inteligencia-de-dados',
    name: 'Inteligência de Dados'
  }, {
    id: 'servicos-juridicos',
    name: 'Serviços Jurídicos'
  }]
}, {
  id: 'servicos-financeiros',
  name: 'Serviços Financeiros',
  subcategories: [{
    id: 'antifraude',
    name: 'Antifraude'
  }, {
    id: 'servicos-de-fidelidade-cupons-clubes-devolucao',
    name: 'Serviços de fidelidade (cupons / clubes / devolução)'
  }, {
    id: 'seguro',
    name: 'Seguro'
  }, {
    id: 'contabilidade-e-impostos',
    name: 'Contabilidade e Impostos'
  }, {
    id: 'provedor-de-pagamento',
    name: 'Provedor de Pagamento'
  }]
}, {
  id: 'marketplaces',
  name: 'Marketplaces',
  subcategories: [{
    id: 'out',
    name: 'Out'
  }, {
    id: 'in',
    name: 'IN'
  }, {
    id: 'hub',
    name: 'HUB'
  }, {
    id: 'seller-center',
    name: 'Seller Center'
  }]
}, {
  id: 'implementacao-e-vendas',
  name: 'Implementação e Vendas',
  subcategories: [{
    id: 'full-commerce',
    name: 'Full Commerce'
  }, {
    id: 'integracao-b2b-b2c-custom-apps-mobile-apps',
    name: 'Integração (B2B/B2C/Custom apps/Mobile apps)'
  }, {
    id: 'implementador-desenvolvedor',
    name: 'Implementador / Desenvolvedor'
  }]
}];

/***/ }),

/***/ "./react/containers/PartnerData/countries.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (['Argentina', 'Brasil', 'Chile', 'Colômbia', 'Romênia', 'Estados Unidos']);

/***/ }),

/***/ "./react/containers/PartnerData/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vtex.styleguide/Input");
/* harmony import */ var vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vtex.styleguide/Button");
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vtex.styleguide/Textarea");
/* harmony import */ var vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("vtex.styleguide/Spinner");
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("vtex.styleguide/Alert");
/* harmony import */ var vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vtex_styleguide_CheckboxGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("vtex.styleguide/CheckboxGroup");
/* harmony import */ var vtex_styleguide_CheckboxGroup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_CheckboxGroup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@apollo/client/index.js");
/* harmony import */ var vtex_render_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("vtex.render-runtime");
/* harmony import */ var vtex_render_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vtex_render_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./react/containers/PartnerData/countries.tsx");
/* harmony import */ var _partnerTypes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./react/containers/PartnerData/partnerTypes.tsx");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./react/containers/PartnerData/categories.ts");
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./react/components/Select/index.tsx");
/* harmony import */ var _components_UploadImageContainer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./react/components/UploadImageContainer/index.tsx");
/* harmony import */ var _hooks_usePartnerData__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./react/hooks/usePartnerData/index.ts");






function _templateObject2() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  mutation savePartner($input: PartnerInput) {\n    partner: savePartner(input: $input)\n      @context(provider: \"partnernetwork.vtex-services@0.x\") {\n      id\n      name\n      email\n      # emailTecnico\n      # emailMarketing\n      # emailFinanceiro\n      status\n      imgURL\n      website\n      types\n      regions\n      description\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  query getPartner($account: String) {\n    partner(account: $account)\n      @context(provider: \"partnernetwork.vtex-services@0.x\") {\n      id\n      name\n      email\n      # emailTecnico\n      # emailMarketing\n      # emailFinanceiro\n      status\n      imgURL\n      website\n      types\n      regions\n      description\n      categories {\n        id\n        name\n      }\n      subcategories {\n        categoryID\n        subcategories {\n          id\n          name\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}; // Dependencies











 // Data



 // Components


 // Hooks


var countryOptions = _countries__WEBPACK_IMPORTED_MODULE_15__["default"].map(function (country) {
  return {
    label: country,
    value: country
  };
});
var partnerQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__["gql"])(_templateObject());
var savePartnerQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__["gql"])(_templateObject2());
var partnerFIle;
var categoriesInitialState = _categories__WEBPACK_IMPORTED_MODULE_17__["categories"].reduce(function (obj, category) {
  return Object.assign(Object.assign({}, obj), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, category.id, category.subcategories.reduce(function (obj2, subcategory) {
    return Object.assign(Object.assign({}, obj2), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, subcategory.id, {
      checked: false,
      label: subcategory.name
    }));
  }, {})));
}, {});

var PartnerData = function PartnerData() {
  var _useRuntime = Object(vtex_render_runtime__WEBPACK_IMPORTED_MODULE_14__["useRuntime"])(),
      account = _useRuntime.account;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__["useQuery"])(partnerQuery, {
    variables: {
      account: account
    }
  }),
      data = _useQuery.data,
      loadingData = _useQuery.loading;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(savePartnerQuery),
      _useMutation2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 2),
      savePartner = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      newData = _useMutation2$.data,
      isSavingPartner = _useMutation2$.loading;

  var _usePartnerData = Object(_hooks_usePartnerData__WEBPACK_IMPORTED_MODULE_20__["default"])(),
      partnerData = _usePartnerData.partnerData,
      updateField = _usePartnerData.updateField,
      updateData = _usePartnerData.updateData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      showInfo = _useState2[0],
      setShowInfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      _useState4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_12__["useIntl"])();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState6 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      showCategoriesCheckboxesError = _useState6[0],
      setShowCategoriesCheckboxesError = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(categoriesInitialState),
      _useState8 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      categoriesCheckboxes = _useState8[0],
      setCategoriesCheckboxes = _useState8[1];

  var removeErrorByField = function removeErrorByField(field) {
    if (!(field in errors)) return;
    var newErrors = Object.assign({}, errors);
    delete newErrors[field];
    setErrors(newErrors);
  };

  var handleInputChange = function handleInputChange(value, field) {
    removeErrorByField(field);
    updateField({
      field: field,
      value: value
    });
  };

  var handleSelectChange = function handleSelectChange(selectOptions, field) {
    removeErrorByField(field);
    var value = Array.isArray(selectOptions) ? selectOptions.map(function (option) {
      return option.value;
    }) : selectOptions.value;
    updateField({
      field: field,
      value: value
    });
  };

  var isEmail = function isEmail(email) {
    return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  var validateInputs = function validateInputs(_ref) {
    var _ref$showErrors = _ref.showErrors,
        showErrors = _ref$showErrors === void 0 ? true : _ref$showErrors;
    var newErrors = {};

    if (partnerData.name === '') {
      newErrors.name = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    } else if (partnerData.name.length < 3) {
      // newErrors.name = 'Must be 3 characters or more'
      newErrors.name = intl.formatMessage({
        "id": "partnernetwork.app.errors.name"
      });
    }

    if (partnerData.description === '') {
      newErrors.description = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    } else if (partnerData.description.length < 200) {
      newErrors.description = intl.formatMessage({
        "id": "partnernetwork.app.errors.description"
      });
    }

    if (partnerData.imgURL === '') {
      newErrors.imgURL = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    }

    if (partnerData.website === '') {
      newErrors.website = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    }

    if (partnerData.regions.length === 0) {
      newErrors.regions = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    }

    if (partnerData.types.length === 0) {
      newErrors.types = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    }

    if (partnerData.email.length === 0) {
      newErrors.email = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    } else if (isEmail(partnerData.email)) {
      newErrors.email = intl.formatMessage({
        "id": "partnernetwork.app.errors.email"
      });
    } // if (partnerData.emailTecnico.length === 0) {
    //   newErrors.emailTecnico = intl.formatMessage({
    //     id: 'partnernetwork.app.errors.required',
    //   })
    // } else if (isEmail(partnerData.emailTecnico)) {
    //   newErrors.emailTecnico = intl.formatMessage({
    //     id: 'partnernetwork.app.errors.email',
    //   })
    // }
    // if (partnerData.emailMarketing.length === 0) {
    //   newErrors.emailMarketing = intl.formatMessage({
    //     id: 'partnernetwork.app.errors.required',
    //   })
    // } else if (isEmail(partnerData.emailMarketing)) {
    //   newErrors.emailMarketing = intl.formatMessage({
    //     id: 'partnernetwork.app.errors.email',
    //   })
    // }
    // if (partnerData.emailFinanceiro.length === 0) {
    //   newErrors.emailFinanceiro = intl.formatMessage({
    //     id: 'partnernetwork.app.errors.required',
    //   })
    // } else if (isEmail(partnerData.emailFinanceiro)) {
    //   newErrors.emailFinanceiro = intl.formatMessage({
    //     id: 'partnernetwork.app.errors.email',
    //   })
    // }


    var isValid = JSON.stringify(newErrors) === '{}';
    if (!isValid && showErrors) setErrors(newErrors);
    return isValid;
  };

  var getCategoriesAndSubcategoriesSelected = function getCategoriesAndSubcategoriesSelected() {
    var selectedCategories = [];
    var selectedSubcategories = [];
    Object.keys(categoriesCheckboxes).forEach(function (categoryID) {
      var subcategoriesObj = categoriesCheckboxes[categoryID];
      var subcategories = Object.entries(subcategoriesObj).filter(function (_ref2) {
        var _ref3 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 2),
            subcategory = _ref3[1];

        return subcategory.checked;
      }).map(function (_ref4) {
        var _ref5 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, 2),
            subcategoryID = _ref5[0],
            subcategory = _ref5[1];

        return {
          id: subcategoryID,
          name: subcategory.label
        };
      });
      if (subcategories.length === 0) return;
      var category = _categories__WEBPACK_IMPORTED_MODULE_17__["categories"].find(function (_ref6) {
        var id = _ref6.id;
        return id === categoryID;
      });

      if (category) {
        selectedCategories.push({
          id: categoryID,
          name: category.name
        });
      }

      selectedSubcategories.push({
        categoryID: categoryID,
        subcategories: subcategories
      });
    });
    return {
      selectedCategories: selectedCategories,
      selectedSubcategories: selectedSubcategories
    };
  };

  var handleButtonSaveClick = /*#__PURE__*/function () {
    var _ref7 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var isValid, _getCategoriesAndSubc, selectedCategories, selectedSubcategories, id, status, imgURL, partialPartnerData, imgFile;

      return _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isValid = validateInputs({
                showErrors: true
              });
              _getCategoriesAndSubc = getCategoriesAndSubcategoriesSelected(), selectedCategories = _getCategoriesAndSubc.selectedCategories, selectedSubcategories = _getCategoriesAndSubc.selectedSubcategories;

              if (isValid) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              if (!(selectedCategories.length === 0)) {
                _context.next = 7;
                break;
              }

              setShowCategoriesCheckboxesError(true);
              return _context.abrupt("return");

            case 7:
              id = partnerData.id, status = partnerData.status, imgURL = partnerData.imgURL, partialPartnerData = __rest(partnerData, ["id", "status", "imgURL"]);
              imgFile = partnerFIle ? {
                imgFile: partnerFIle
              } : {};
              savePartner({
                variables: {
                  input: Object.assign(Object.assign(Object.assign({}, imgFile), partialPartnerData), {
                    account: account,
                    categories: selectedCategories,
                    subcategories: selectedSubcategories
                  })
                }
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleButtonSaveClick() {
      return _ref7.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (!(data === null || data === void 0 ? void 0 : data.partner)) return;

    var _a = data.partner,
        _categories = _a.categories,
        subcategories = _a.subcategories,
        partialPartner = __rest(_a, ["categories", "subcategories"]);

    setCategoriesCheckboxes(function (prevState) {
      var newCheckedMap = _categories.reduce(function (obj, category) {
        var subcategoryFinded = subcategories.find(function (_ref8) {
          var categoryID = _ref8.categoryID;
          return categoryID === category.id;
        });
        var prevSubCategories = categoriesCheckboxes[category.id];
        return Object.assign(Object.assign({}, obj), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, category.id, subcategoryFinded.subcategories.reduce(function (obj2, subcategory) {
          return Object.assign(Object.assign({}, obj2), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, subcategory.id, {
            checked: true,
            label: subcategory.name
          }));
        }, Object.assign({}, prevSubCategories))));
      }, {});

      return Object.assign(Object.assign({}, prevState), newCheckedMap);
    });
    updateData(partialPartner); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (!newData || !newData.partner) return;
    updateData(newData.partner); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newData]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (!showCategoriesCheckboxesError) return;

    var _getCategoriesAndSubc2 = getCategoriesAndSubcategoriesSelected(),
        selectedCategories = _getCategoriesAndSubc2.selectedCategories;

    if (selectedCategories.length !== 0) {
      setShowCategoriesCheckboxesError(false);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [categoriesCheckboxes]);
  var inputCompanyNamePlaceholder = intl.formatMessage({
    "id": "partnernetwork.app.input-company-name.placeholder"
  });
  var inputWebsitePlaceholder = intl.formatMessage({
    "id": "partnernetwork.app.input-website.placeholder"
  });
  var inputDescriptionPlaceholder = intl.formatMessage({
    "id": "partnernetwork.app.input-description.placeholder"
  });
  var regionsValue = partnerData.regions.map(function (region) {
    return countryOptions.find(function (country) {
      return country.value === region;
    });
  }).filter(Boolean);
  var typesValue = partnerData.types.map(function (type) {
    return _partnerTypes__WEBPACK_IMPORTED_MODULE_16__["default"].find(function (partnerType) {
      return partnerType.value === type;
    });
  }).filter(Boolean);
  if (loadingData) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_9___default.a, null);

  var closedMessage = function closedMessage() {
    setShowInfo(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "mb6"
  }, partnerData.status === 'APPROVED' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10___default.a, {
    type: "success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
    id: "partnernetwork.app.status-approved"
  })), partnerData.status === 'PENDING' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, showInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10___default.a, {
    type: "warning",
    onClose: closedMessage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
    id: "partnernetwork.app.status-waiting"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10___default.a, {
    type: "warning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
    id: "partnernetwork.app.status-pending"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "mb8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_UploadImageContainer__WEBPACK_IMPORTED_MODULE_19__["default"], {
    id: "company-logo",
    error: !!errors.imgURL,
    imgURL: partnerData.imgURL,
    errorMessage: errors.imgURL,
    title: partnerData.name || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
      id: "partnernetwork.app.company-name"
    }),
    description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
      id: "partnernetwork.app.upload-image-recommendation"
    }),
    onImageChange: function onImageChange(imgURL, file) {
      if (file) {
        partnerFIle = file;
      }

      handleInputChange(imgURL, 'imgURL');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "mb7 flex flex-column flex-row-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "w-100 mb7 mb0-l mr7-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    required: true,
    name: "name",
    value: partnerData.name,
    error: errors.name,
    errorMessage: errors.name,
    onChange: function onChange(_ref9) {
      var value = _ref9.target.value;
      handleInputChange(value, 'name');
    },
    placeholder: inputCompanyNamePlaceholder
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "select-input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Select__WEBPACK_IMPORTED_MODULE_18__["default"], {
    multi: true,
    options: countryOptions,
    errorMessage: errors.types,
    value: regionsValue,
    onChange: function onChange(selectOption) {
      return handleSelectChange(selectOption, 'regions');
    },
    placeholder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
      id: "partnernetwork.app.select-region.placeholder"
    })
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "mb7 flex flex-column flex-row-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "w-100 mb7 mb0-l mr7-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "select-input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Select__WEBPACK_IMPORTED_MODULE_18__["default"], {
    multi: true,
    options: _partnerTypes__WEBPACK_IMPORTED_MODULE_16__["default"],
    errorMessage: errors.types,
    value: typesValue,
    onChange: function onChange(selectOption) {
      return handleSelectChange(selectOption, 'types');
    },
    placeholder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
      id: "partnernetwork.app.select-partner-type.placeholder"
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    required: true,
    type: "url",
    value: partnerData.website,
    error: errors.website,
    errorMessage: errors.website,
    onChange: function onChange(_ref10) {
      var value = _ref10.target.value;
      handleInputChange(value, 'website');
    },
    placeholder: inputWebsitePlaceholder
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "mb7 mb8-l flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    required: true,
    type: "email",
    value: partnerData.email,
    error: errors.email,
    errorMessage: errors.email,
    onChange: function onChange(_ref11) {
      var value = _ref11.target.value;
      handleInputChange(value, 'email');
    },
    placeholder: "Email*"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "mb7 about-the-partner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
    className: "t-heading-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
    id: "partnernetwork.app.about-the-partner"
  })), partnerData.description.length < 200 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", {
    className: "subtitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
    id: "partnernetwork.app.about-the-partner-minimum"
  }), ": ", partnerData.description.length, "/200") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_8___default.a, {
    required: true,
    resize: "none",
    name: "description",
    value: partnerData.description,
    error: errors.description,
    onChange: function onChange(_ref12) {
      var value = _ref12.target.value;
      handleInputChange(value, 'description');
    },
    errorMessage: errors.description,
    placeholder: inputDescriptionPlaceholder
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "mb7 categories-and-subcategories"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
    className: "t-heading-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
    id: "partnernetwork.app.categories-and-subcategories-title"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
    id: "partnernetwork.app.categories-and-subcategories-subtitle"
  })), _categories__WEBPACK_IMPORTED_MODULE_17__["categories"].map(function (category) {
    var checkedMap = categoriesCheckboxes[category.id];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "mb6",
      key: category.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(vtex_styleguide_CheckboxGroup__WEBPACK_IMPORTED_MODULE_11___default.a, {
      value: "simple",
      id: category.id,
      name: category.id,
      label: category.name,
      checkedMap: checkedMap,
      onGroupChange: function onGroupChange(newCheckedMap) {
        setCategoriesCheckboxes(function (prevState) {
          return Object.assign(Object.assign({}, prevState), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, category.id, newCheckedMap));
        });
      }
    }));
  }), showCategoriesCheckboxesError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10___default.a, {
    type: "error"
  }, "You need to select at lest 1 category and subcategory.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "actions flex flex-column-reverse flex-row-l justify-end-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "mb3 mb0-l button-save-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: handleButtonSaveClick,
    disabled: !validateInputs({
      showErrors: false
    }) || isSavingPartner
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, isSavingPartner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_9___default.a, {
    color: "#FFF",
    size: 20
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
    id: "partnernetwork.app.button-save"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PartnerData);

/***/ }),

/***/ "./react/containers/PartnerData/partnerTypes.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  value: 'ISV',
  label: 'ISV'
}, {
  value: 'Agencia / Reseller',
  label: 'Agencia / Reseller'
}]);

/***/ }),

/***/ "./react/containers/PartnerServices/NewServiceForm/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vtex.styleguide/Input");
/* harmony import */ var vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vtex.styleguide/Button");
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vtex.styleguide/Textarea");
/* harmony import */ var vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vtex.styleguide/Spinner");
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@apollo/client/index.js");
/* harmony import */ var _hooks_usePartnerData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./react/hooks/usePartnerData/index.ts");
/* harmony import */ var _hooks_usePartnerServices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./react/hooks/usePartnerServices/index.ts");




function _templateObject() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation createService($partnerID: ID, $input: ServiceInput) {\n    newService: createService(partnerID: $partnerID, input: $input) {\n      id\n      name\n      isActive\n      description\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Dependencies






 // Hooks


 // Queries

var createServiceQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["gql"])(_templateObject());

var NewServiceForm = function NewServiceForm(_ref) {
  var setShowForm = _ref.setShowForm;

  var _usePartnerData = Object(_hooks_usePartnerData__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      partnerData = _usePartnerData.partnerData;

  var _usePartnerServices = Object(_hooks_usePartnerServices__WEBPACK_IMPORTED_MODULE_11__["default"])(),
      addService = _usePartnerServices.addService;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: '',
    description: '',
    isActive: true
  }),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(createServiceQuery),
      _useMutation2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
      createService = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      newData = _useMutation2$.data,
      loading = _useMutation2$.loading;

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_8__["useIntl"])();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var handleButtonSaveClick = function handleButtonSaveClick() {
    var newErrors = {};
    var name = data.name,
        description = data.description;

    if (name === '') {
      newErrors.name = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    } else if (name.length < 3) {
      newErrors.name = intl.formatMessage({
        "id": "partnernetwork.app.errors.name"
      });
    }

    if (description === '') {
      newErrors.description = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    } else if (description.length < 10) {
      newErrors.description = intl.formatMessage({
        "id": "partnernetwork.app.errors.description"
      });
    }

    if (JSON.stringify(newErrors) !== '{}') {
      setErrors(newErrors);
      return;
    }

    createService({
      variables: {
        partnerID: partnerData.id,
        input: data
      }
    });
  };

  var handleInputChange = function handleInputChange(event) {
    var target = event.target;

    if (target.name in errors) {
      var newErrors = Object.assign({}, errors);
      delete newErrors[target.name];
      setErrors(newErrors);
    }

    setData(function (prevData) {
      return Object.assign(Object.assign({}, prevData), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.name, target.value));
    });
  };

  var inputServiceNamePlaceholder = intl.formatMessage({
    "id": "partnernetwork.app.input-service-name.placeholder"
  });
  var inputServiceDescriptionPlaceholder = intl.formatMessage({
    "id": "partnernetwork.app.input-service-description.placeholder"
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!newData) return;
    addService(newData.newService);
    setShowForm(false); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mb4 mb7-l flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    required: true,
    id: "name",
    name: "name",
    value: data.name,
    onChange: handleInputChange,
    error: errors.name,
    errorMessage: errors.name,
    placeholder: inputServiceNamePlaceholder
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mb7 about-the-service"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "t-heading-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
    id: "partnernetwork.app.about-the-service"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_6___default.a, {
    required: true,
    resize: "none",
    id: "description",
    name: "description",
    value: data.description,
    onChange: handleInputChange,
    error: errors.description,
    errorMessage: errors.description,
    placeholder: inputServiceDescriptionPlaceholder
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "actions flex flex-column-reverse flex-row-l justify-end-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mr6-l button-cancel-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: function onClick() {
      return setShowForm(false);
    },
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
    id: "partnernetwork.app.button-cancel"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mb3 mb0-l button-save-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleButtonSaveClick,
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "#FFF",
    size: 20
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
    id: "partnernetwork.app.button-save"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewServiceForm);

/***/ }),

/***/ "./react/containers/PartnerServices/ServicesTable/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vtex.styleguide/Button");
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vtex.styleguide/Spinner");
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@apollo/client/index.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./react/components/Table/index.tsx");
/* harmony import */ var _components_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./react/components/TableRow/index.tsx");
/* harmony import */ var _hooks_usePartnerData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./react/hooks/usePartnerData/index.ts");
/* harmony import */ var _hooks_usePartnerServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./react/hooks/usePartnerServices/index.ts");



function _templateObject3() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation updateService($id: ID, $input: ServiceInput) {\n    updateService(id: $id, input: $input)\n      @context(provider: \"partnernetwork.vtex-services@0.x\") {\n      id\n      name\n      isActive\n      description\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation saveServices($partnerID: ID, $services: [ServiceInput!]) {\n    saveServices(partnerID: $partnerID, services: $services)\n      @context(provider: \"partnernetwork.vtex-services@0.x\") {\n      id\n      name\n      isActive\n      description\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query getServices($partnerID: ID) {\n    services(partnerID: $partnerID)\n      @context(provider: \"partnernetwork.vtex-services@0.x\") {\n      id\n      name\n      isActive\n      description\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}; // Dependencies






 // Components


 // Hooks


 // Queries

var getServicesQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());
var saveServicesQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject2());
var updateServiceQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject3());

var ServicesTable = function ServicesTable(_ref) {
  var setShowForm = _ref.setShowForm;

  var _usePartnerData = Object(_hooks_usePartnerData__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      partnerData = _usePartnerData.partnerData;

  var _usePartnerServices = Object(_hooks_usePartnerServices__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      services = _usePartnerServices.services,
      addServices = _usePartnerServices.addServices,
      removeService = _usePartnerServices.removeService,
      updateService = _usePartnerServices.updateService;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(getServicesQuery, {
    variables: {
      partnerID: partnerData.id
    }
  }),
      data = _useQuery.data,
      getLoading = _useQuery.loading;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(saveServicesQuery),
      _useMutation2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      saveServicesMutation = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var _useMutation3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(updateServiceQuery),
      _useMutation4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation3, 1),
      updateServiceMutation = _useMutation4[0];

  var handleButtonSaveClick = function handleButtonSaveClick() {
    saveServicesMutation({
      variables: {
        services: services,
        partnerID: partnerData.id
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!data || !data.services || services.length > 0) return;
    addServices(data.services); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (getLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "flex justify-center ma6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {
      color: "#f71963",
      size: 50
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, services && services.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_7__["default"], null, services.map(function (service) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: service.id,
      name: service.name,
      showEmptyImage: false,
      isActive: service.isActive,
      description: service.description,
      accountName: "",
      onButtonRemoveClick: function onButtonRemoveClick() {
        var id = service.id,
            serviceWithoutID = __rest(service, ["id"]);

        updateServiceMutation({
          variables: {
            id: id,
            input: Object.assign(Object.assign({}, serviceWithoutID), {
              isRemoved: true
            })
          }
        });
        removeService(id);
      },
      onCheckboxChange: function onCheckboxChange(_ref2) {
        var checked = _ref2.target.checked;
        updateService(Object.assign(Object.assign({}, service), {
          isActive: checked
        }));
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "actions flex flex-column flex-row-l justify-between-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "button-add-container mb4 mb0-l w-auto-l"
  }, services.length < 5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: function onClick() {
      return setShowForm(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "partnernetwork.app.button-add-service"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "actions flex flex-column-reverse flex-row-l justify-end-l"
  }, services.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mb4 mb0-l button-save-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleButtonSaveClick,
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "#FFF",
    size: 20
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "partnernetwork.app.button-save"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ServicesTable);

/***/ }),

/***/ "./react/containers/PartnerServices/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NewServiceForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./react/containers/PartnerServices/NewServiceForm/index.tsx");
/* harmony import */ var _ServicesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./react/containers/PartnerServices/ServicesTable/index.tsx");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./react/components/Title/index.tsx");

// Dependencies

 // Components





var PartnerServices = function PartnerServices() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showForm = _useState2[0],
      setShowForm = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "partnernetwork.app.services-title"
  })), !showForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ServicesTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setShowForm: setShowForm
  }), showForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewServiceForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setShowForm: setShowForm
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PartnerServices);

/***/ }),

/***/ "./react/hooks/usePartnerClients/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./react/state/store/index.tsx");
/* harmony import */ var _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./react/state/reducer/index.types.ts");
// Dependencies
 // State




var usePartnerClients = function usePartnerClients() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_state_store__WEBPACK_IMPORTED_MODULE_1__["store"]),
      clients = _useContext.state.clients,
      dispatch = _useContext.dispatch;

  var addClient = function addClient(newClient) {
    dispatch({
      type: _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__["ADD_CLIENT"],
      payload: newClient
    });
  };

  var addClients = function addClients(newClients) {
    dispatch({
      type: _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__["ADD_CLIENTS"],
      payload: newClients
    });
  };

  var updateClient = function updateClient(newClient) {
    dispatch({
      type: _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_CLIENT"],
      payload: newClient
    });
  };

  var removeClient = function removeClient(id) {
    dispatch({
      type: _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CLIENT"],
      payload: {
        id: id
      }
    });
  };

  return {
    clients: clients,
    addClient: addClient,
    addClients: addClients,
    updateClient: updateClient,
    removeClient: removeClient
  };
};

/* harmony default export */ __webpack_exports__["default"] = (usePartnerClients);

/***/ }),

/***/ "./react/hooks/usePartnerData/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./react/state/store/index.tsx");
/* harmony import */ var _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./react/state/reducer/index.types.ts");
// Dependencies
 // State




var usePartnerData = function usePartnerData() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_state_store__WEBPACK_IMPORTED_MODULE_1__["store"]),
      partnerData = _useContext.state.partnerData,
      dispatch = _useContext.dispatch;

  var updateField = function updateField(_ref) {
    var field = _ref.field,
        value = _ref.value;
    dispatch({
      type: _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_PARTNER_DATA_FIELD"],
      payload: {
        field: field,
        value: value
      }
    });
  };

  var updateData = function updateData(newData) {
    dispatch({
      type: _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_PARTNER_DATA"],
      payload: newData
    });
  };

  return {
    partnerData: partnerData,
    updateField: updateField,
    updateData: updateData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (usePartnerData);

/***/ }),

/***/ "./react/hooks/usePartnerServices/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./react/state/store/index.tsx");
/* harmony import */ var _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./react/state/reducer/index.types.ts");
// Dependencies
 // State




var usePartnerServices = function usePartnerServices() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_state_store__WEBPACK_IMPORTED_MODULE_1__["store"]),
      services = _useContext.state.services,
      dispatch = _useContext.dispatch;

  var addService = function addService(newService) {
    dispatch({
      type: _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__["ADD_SERVICE"],
      payload: newService
    });
  };

  var addServices = function addServices(newServices) {
    dispatch({
      type: _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__["ADD_SERVICES"],
      payload: newServices
    });
  };

  var updateService = function updateService(newService) {
    dispatch({
      type: _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_SERVICE"],
      payload: newService
    });
  };

  var removeService = function removeService(id) {
    dispatch({
      type: _state_reducer_index_types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_SERVICE"],
      payload: {
        id: id
      }
    });
  };

  return {
    services: services,
    addService: addService,
    addServices: addServices,
    updateService: updateService,
    removeService: removeService
  };
};

/* harmony default export */ __webpack_exports__["default"] = (usePartnerServices);

/***/ }),

/***/ "./react/state/reducer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _index_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./react/state/reducer/index.types.ts");



/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  switch (action.type) {
    case _index_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_PARTNER_DATA"]:
      {
        var partnerData = state.partnerData;
        return Object.assign(Object.assign({}, state), {
          partnerData: Object.assign(Object.assign({}, partnerData), action.payload)
        });
      }

    case _index_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_PARTNER_DATA_FIELD"]:
      {
        var _partnerData = state.partnerData;
        var _action$payload = action.payload,
            field = _action$payload.field,
            value = _action$payload.value;
        var newPartnerData = Object.assign(Object.assign({}, _partnerData), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, field, value));
        return Object.assign(Object.assign({}, state), {
          partnerData: newPartnerData
        });
      }

    case _index_types__WEBPACK_IMPORTED_MODULE_2__["ADD_SERVICE"]:
      {
        var services = state.services;
        var newService = action.payload;
        return Object.assign(Object.assign({}, state), {
          services: [].concat(Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(services), [newService])
        });
      }

    case _index_types__WEBPACK_IMPORTED_MODULE_2__["ADD_SERVICES"]:
      {
        return Object.assign(Object.assign({}, state), {
          services: action.payload
        });
      }

    case _index_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_SERVICE"]:
      {
        var _services = state.services;
        var _newService = action.payload;

        var newServices = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_services);

        _services.forEach(function (service, index) {
          if (service.id === _newService.id) {
            newServices[index] = _newService;
          }
        });

        return Object.assign(Object.assign({}, state), {
          services: newServices
        });
      }

    case _index_types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_SERVICE"]:
      {
        var _services2 = state.services;
        var id = action.payload.id;

        var _newServices = _services2.filter(function (service) {
          return service.id !== id;
        });

        return Object.assign(Object.assign({}, state), {
          services: _newServices
        });
      }

    case _index_types__WEBPACK_IMPORTED_MODULE_2__["ADD_CLIENT"]:
      {
        var clients = state.clients;
        var newClient = action.payload;
        return Object.assign(Object.assign({}, state), {
          clients: [].concat(Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(clients), [newClient])
        });
      }

    case _index_types__WEBPACK_IMPORTED_MODULE_2__["ADD_CLIENTS"]:
      {
        return Object.assign(Object.assign({}, state), {
          clients: action.payload
        });
      }

    case _index_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_CLIENT"]:
      {
        var _clients = state.clients;
        var _newClient = action.payload;

        var newClients = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_clients);

        _clients.forEach(function (client, index) {
          if (client.id === _newClient.id) {
            newClients[index] = _newClient;
          }
        });

        return Object.assign(Object.assign({}, state), {
          clients: newClients
        });
      }

    case _index_types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CLIENT"]:
      {
        var _clients2 = state.clients;
        var _id = action.payload.id;

        var _newClients = _clients2.filter(function (client) {
          return client.id !== _id;
        });

        return Object.assign(Object.assign({}, state), {
          clients: _newClients
        });
      }

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./react/state/reducer/index.types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PARTNER_DATA", function() { return UPDATE_PARTNER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PARTNER_DATA_FIELD", function() { return UPDATE_PARTNER_DATA_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SERVICE", function() { return ADD_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SERVICES", function() { return ADD_SERVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SERVICE", function() { return UPDATE_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SERVICE", function() { return REMOVE_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CLIENT", function() { return ADD_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CLIENTS", function() { return ADD_CLIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CLIENT", function() { return UPDATE_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CLIENT", function() { return REMOVE_CLIENT; });
var UPDATE_PARTNER_DATA = 'UPDATE_PARTNER_DATA';
var UPDATE_PARTNER_DATA_FIELD = 'UPDATE_PARTNER_DATA_FIELD';
var ADD_SERVICE = 'ADD_SERVICE';
var ADD_SERVICES = 'ADD_SERVICES';
var UPDATE_SERVICE = 'UPDATE_SERVICE';
var REMOVE_SERVICE = 'REMOVE_SERVICE';
var ADD_CLIENT = 'ADD_CLIENT';
var ADD_CLIENTS = 'ADD_CLIENTS';
var UPDATE_CLIENT = 'UPDATE_CLIENT';
var REMOVE_CLIENT = 'REMOVE_CLIENT';

/***/ }),

/***/ "./react/state/store/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateProvider", function() { return StateProvider; });
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./react/state/reducer/index.ts");

// Dependencies
 // Reducer


var initialState = {
  partnerData: {
    id: '',
    email: '',
    // emailTecnico: '',
    // emailMarketing: '',
    // emailFinanceiro: '',
    website: '',
    name: '',
    types: [],
    regions: [],
    imgURL: '',
    description: '',
    status: ''
  },
  clients: [],
  services: []
};
var store = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  state: initialState,
  dispatch: function dispatch() {}
});
var Provider = store.Provider;
var StateProvider = function StateProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState),
      _useReducer2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children);
};

/***/ })

}]);
//# sourceMappingURL=App~IndexApp.js.map