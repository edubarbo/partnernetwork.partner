(window["webpackJsonppartnernetwork_partner_5_0_9"] = window["webpackJsonppartnernetwork_partner_5_0_9"] || []).push([["vendors~IndexApp~apolloClient"],{

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/core/cache.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return ApolloCache; });
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");


var ApolloCache = (function () {
    function ApolloCache() {
        this.getFragmentDoc = Object(optimism__WEBPACK_IMPORTED_MODULE_0__["wrap"])(_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__["getFragmentQueryDocument"]);
    }
    ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.identify = function (object) {
        return;
    };
    ApolloCache.prototype.gc = function () {
        return [];
    };
    ApolloCache.prototype.modify = function (options) {
        return false;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read({
            rootId: options.id || 'ROOT_QUERY',
            query: options.query,
            variables: options.variables,
            returnPartialData: options.returnPartialData,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read({
            query: this.getFragmentDoc(options.fragment, options.fragmentName),
            variables: options.variables,
            rootId: options.id,
            returnPartialData: options.returnPartialData,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.writeQuery = function (options) {
        return this.write({
            dataId: options.id || 'ROOT_QUERY',
            result: options.data,
            query: options.query,
            variables: options.variables,
            broadcast: options.broadcast,
        });
    };
    ApolloCache.prototype.writeFragment = function (options) {
        return this.write({
            dataId: options.id,
            result: options.data,
            variables: options.variables,
            query: this.getFragmentDoc(options.fragment, options.fragmentName),
            broadcast: options.broadcast,
        });
    };
    return ApolloCache;
}());

//# sourceMappingURL=cache.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/core/types/Cache.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
var Cache;
(function (Cache) {
})(Cache || (Cache = {}));
//# sourceMappingURL=Cache.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/core/types/common.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingFieldError", function() { return MissingFieldError; });
var MissingFieldError = (function () {
    function MissingFieldError(message, path, query, clientOnly, variables) {
        this.message = message;
        this.path = path;
        this.query = query;
        this.clientOnly = clientOnly;
        this.variables = variables;
    }
    return MissingFieldError;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_cache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/core/cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return _core_cache_js__WEBPACK_IMPORTED_MODULE_0__["ApolloCache"]; });

/* harmony import */ var _core_types_Cache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/core/types/Cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return _core_types_Cache_js__WEBPACK_IMPORTED_MODULE_1__["Cache"]; });

/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/core/types/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingFieldError", function() { return _core_types_common_js__WEBPACK_IMPORTED_MODULE_2__["MissingFieldError"]; });

/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"]; });

/* harmony import */ var _inmemory_inMemoryCache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return _inmemory_inMemoryCache_js__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]; });

/* harmony import */ var _inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeVar", function() { return _inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_5__["makeVar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheSlot", function() { return _inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_5__["cacheSlot"]; });

/* harmony import */ var _inmemory_policies_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/policies.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return _inmemory_policies_js__WEBPACK_IMPORTED_MODULE_6__["defaultDataIdFromObject"]; });

/* harmony import */ var _inmemory_types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/types.js");
/* harmony import */ var _inmemory_types_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_inmemory_types_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _inmemory_types_js__WEBPACK_IMPORTED_MODULE_7__) if(["default","ApolloCache","Cache","MissingFieldError","isReference","makeReference","InMemoryCache","makeVar","cacheSlot","defaultDataIdFromObject"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _inmemory_types_js__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/entityStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityStore", function() { return EntityStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsResultCaching", function() { return supportsResultCaching; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/helpers.js");





var DELETE = Object.create(null);
var delModifier = function () { return DELETE; };
var INVALIDATE = Object.create(null);
var EntityStore = (function () {
    function EntityStore(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = Object.create(null);
        this.rootIds = Object.create(null);
        this.refs = Object.create(null);
        this.getFieldValue = function (objectOrReference, storeFieldName) { return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["maybeDeepFreeze"])(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objectOrReference)
            ? _this.get(objectOrReference.__ref, storeFieldName)
            : objectOrReference && objectOrReference[storeFieldName]); };
        this.canRead = function (objOrRef) {
            return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objOrRef)
                ? _this.has(objOrRef.__ref)
                : typeof objOrRef === "object";
        };
        this.toReference = function (objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") {
                return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(objOrIdOrRef);
            }
            if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objOrIdOrRef)) {
                return objOrIdOrRef;
            }
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(id);
                if (mergeIntoStore) {
                    _this.merge(id, objOrIdOrRef);
                }
                return ref;
            }
        };
    }
    EntityStore.prototype.toObject = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.data);
    };
    EntityStore.prototype.has = function (dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore.prototype.get = function (dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && _helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(storeObject, fieldName)) {
                return storeObject[fieldName];
            }
        }
        if (fieldName === "__typename" &&
            _helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
        }
    };
    EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
        if (dependOnExistence)
            this.group.depend(dataId, "__exists");
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(this.data, dataId)) {
            return this.data[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.lookup(dataId, dependOnExistence);
        }
        if (this.policies.rootTypenamesById[dataId]) {
            return Object.create(null);
        }
    };
    EntityStore.prototype.merge = function (dataId, incoming) {
        var _this = this;
        var existing = this.lookup(dataId);
        var merged = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["DeepMerger"](storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = Object.create(null);
                if (!existing)
                    fieldsToDirty_1.__exists = 1;
                Object.keys(incoming).forEach(function (storeFieldName) {
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        fieldsToDirty_1[storeFieldName] = 1;
                        var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName);
                        if (fieldName !== storeFieldName &&
                            !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                            fieldsToDirty_1[fieldName] = 1;
                        }
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                            delete merged[storeFieldName];
                        }
                    }
                });
                Object.keys(fieldsToDirty_1).forEach(function (fieldName) { return _this.group.dirty(dataId, fieldName); });
            }
        }
    };
    EntityStore.prototype.modify = function (dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
                DELETE: DELETE,
                INVALIDATE: INVALIDATE,
                isReference: _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"],
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (fieldNameOrOptions, from) { return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                    fieldName: fieldNameOrOptions,
                    from: from || Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(dataId),
                } : fieldNameOrOptions, { store: _this }); },
            };
            Object.keys(storeObject).forEach(function (storeFieldName) {
                var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0)
                    return;
                var modify = typeof fields === "function"
                    ? fields
                    : fields[storeFieldName] || fields[fieldName];
                if (modify) {
                    var newValue = modify === delModifier ? DELETE :
                        modify(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["maybeDeepFreeze"])(fieldValue), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, sharedDetails_1), { fieldName: fieldName,
                            storeFieldName: storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
                    if (newValue === INVALIDATE) {
                        _this.group.dirty(dataId, storeFieldName);
                    }
                    else {
                        if (newValue === DELETE)
                            newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields_1[storeFieldName] = newValue;
                            needToMerge_1 = true;
                            fieldValue = newValue;
                        }
                    }
                }
                if (fieldValue !== void 0) {
                    allDeleted_1 = false;
                }
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) {
                        this.data[dataId] = void 0;
                    }
                    else {
                        delete this.data[dataId];
                    }
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    EntityStore.prototype.delete = function (dataId, fieldName, args) {
        var _a;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args
                ? this.policies.getStoreFieldName({ typename: typename, fieldName: fieldName, args: args })
                : fieldName;
            return this.modify(dataId, storeFieldName ? (_a = {},
                _a[storeFieldName] = delModifier,
                _a) : delModifier);
        }
        return false;
    };
    EntityStore.prototype.evict = function (options) {
        var evicted = false;
        if (options.id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(this.data, options.id)) {
                evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer) {
                evicted = this.parent.evict(options) || evicted;
            }
            if (options.fieldName || evicted) {
                this.group.dirty(options.id, options.fieldName || "__exists");
            }
        }
        return evicted;
    };
    EntityStore.prototype.clear = function () {
        this.replace(null);
    };
    EntityStore.prototype.extract = function () {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function (id) {
            if (!_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(_this.policies.rootTypenamesById, id)) {
                extraRootIds.push(id);
            }
        });
        if (extraRootIds.length) {
            obj.__META = { extraRootIds: extraRootIds.sort() };
        }
        return obj;
    };
    EntityStore.prototype.replace = function (newData) {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) {
            if (!(newData && _helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(newData, dataId))) {
                _this.delete(dataId);
            }
        });
        if (newData) {
            var __META = newData.__META, rest_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(newData, ["__META"]);
            Object.keys(rest_1).forEach(function (dataId) {
                _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) {
                __META.extraRootIds.forEach(this.retain, this);
            }
        }
    };
    EntityStore.prototype.retain = function (rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore.prototype.release = function (rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count)
                delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    EntityStore.prototype.getRootIdSet = function (ids) {
        if (ids === void 0) { ids = new Set(); }
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
        }
        else {
            Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        }
        return ids;
    };
    EntityStore.prototype.gc = function () {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function (id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(snapshot, id)) {
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while (root_1 instanceof Layer)
                root_1 = root_1.parent;
            idsToRemove.forEach(function (id) { return root_1.delete(id); });
        }
        return idsToRemove;
    };
    EntityStore.prototype.findChildRefIds = function (dataId) {
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = Object.create(null);
            var workSet_1 = new Set([this.data[dataId]]);
            var canTraverse_1 = function (obj) { return obj !== null && typeof obj === 'object'; };
            workSet_1.forEach(function (obj) {
                if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(obj)) {
                    found_1[obj.__ref] = true;
                }
                else if (canTraverse_1(obj)) {
                    Object.values(obj)
                        .filter(canTraverse_1)
                        .forEach(workSet_1.add, workSet_1);
                }
            });
        }
        return this.refs[dataId];
    };
    EntityStore.prototype.makeCacheKey = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.group.keyMaker.lookupArray(args);
    };
    return EntityStore;
}());

var CacheGroup = (function () {
    function CacheGroup(caching) {
        this.caching = caching;
        this.d = null;
        this.keyMaker = new optimism__WEBPACK_IMPORTED_MODULE_1__["KeyTrie"](_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["canUseWeakMap"]);
        this.d = caching ? Object(optimism__WEBPACK_IMPORTED_MODULE_1__["dep"])() : null;
    }
    CacheGroup.prototype.depend = function (dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName);
            if (fieldName !== storeFieldName) {
                this.d(makeDepKey(dataId, fieldName));
            }
        }
    };
    CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
        if (this.d) {
            this.d.dirty(makeDepKey(dataId, storeFieldName));
        }
    };
    return CacheGroup;
}());
function makeDepKey(dataId, storeFieldName) {
    return storeFieldName + '#' + dataId;
}
(function (EntityStore) {
    var Root = (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Root, _super);
        function Root(_a) {
            var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.storageTrie = new optimism__WEBPACK_IMPORTED_MODULE_1__["KeyTrie"](_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["canUseWeakMap"]);
            _this.sharedLayerGroup = new CacheGroup(resultCaching);
            if (seed)
                _this.replace(seed);
            return _this;
        }
        Root.prototype.addLayer = function (layerId, replay) {
            return new Layer(layerId, this, replay, this.sharedLayerGroup);
        };
        Root.prototype.removeLayer = function () {
            return this;
        };
        Root.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
        };
        return Root;
    }(EntityStore));
    EntityStore.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Layer, _super);
    function Layer(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer.prototype.addLayer = function (layerId, replay) {
        return new Layer(layerId, this, replay, this.group);
    };
    Layer.prototype.removeLayer = function (layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) {
                Object.keys(this.data).forEach(function (dataId) {
                    if (_this.data[dataId] !== parent.lookup(dataId)) {
                        _this.delete(dataId);
                    }
                });
            }
            return parent;
        }
        if (parent === this.parent)
            return this;
        return parent.addLayer(this.id, this.replay);
    };
    Layer.prototype.toObject = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.parent.toObject()), this.data);
    };
    Layer.prototype.findChildRefIds = function (dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return _helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(this.data, dataId) ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer.prototype.getStorage = function () {
        var p = this.parent;
        while (p.parent)
            p = p.parent;
        return p.getStorage.apply(p, arguments);
    };
    return Layer;
}(EntityStore));
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    return !!(store instanceof EntityStore && store.group.caching);
}
//# sourceMappingURL=entityStore.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/fixPolyfills.js":
/***/ (function(module, exports) {

//# sourceMappingURL=fixPolyfills.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypenameFromStoreObject", function() { return getTypenameFromStoreObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOrFieldNameRegExp", function() { return TypeOrFieldNameRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldNameFromStoreName", function() { return fieldNameFromStoreName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectionSetMatchesResult", function() { return selectionSetMatchesResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeValueIsStoreObject", function() { return storeValueIsStoreObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeProcessedFieldsMerger", function() { return makeProcessedFieldsMerger; });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");

var hasOwn = Object.prototype.hasOwnProperty;
function getTypenameFromStoreObject(store, objectOrReference) {
    return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["isReference"])(objectOrReference)
        ? store.get(objectOrReference.__ref, "__typename")
        : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if (result && typeof result === "object") {
        return Array.isArray(result)
            ? result.every(function (item) { return selectionSetMatchesResult(selectionSet, item, variables); })
            : selectionSet.selections.every(function (field) {
                if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["isField"])(field) && Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["shouldInclude"])(field, variables)) {
                    var key = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["resultKeyNameFromField"])(field);
                    return hasOwn.call(result, key) &&
                        (!field.selectionSet ||
                            selectionSetMatchesResult(field.selectionSet, result[key], variables));
                }
                return true;
            });
    }
    return false;
}
function storeValueIsStoreObject(value) {
    return value !== null &&
        typeof value === "object" &&
        !Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["isReference"])(value) &&
        !Array.isArray(value);
}
function makeProcessedFieldsMerger() {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["DeepMerger"];
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/inMemoryCache.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return InMemoryCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fixPolyfills_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/fixPolyfills.js");
/* harmony import */ var _fixPolyfills_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fixPolyfills_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _core_cache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/core/cache.js");
/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/core/types/common.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _readFromStore_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/readFromStore.js");
/* harmony import */ var _writeToStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/writeToStore.js");
/* harmony import */ var _entityStore_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony import */ var _reactiveVars_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony import */ var _policies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/policies.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/helpers.js");












var defaultConfig = {
    dataIdFromObject: _policies_js__WEBPACK_IMPORTED_MODULE_10__["defaultDataIdFromObject"],
    addTypename: true,
    resultCaching: true,
    typePolicies: {},
};
var InMemoryCache = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.makeVar = _reactiveVars_js__WEBPACK_IMPORTED_MODULE_9__["makeVar"];
        _this.txCount = 0;
        _this.maybeBroadcastWatch = Object(optimism__WEBPACK_IMPORTED_MODULE_2__["wrap"])(function (c, fromOptimisticTransaction) {
            return _this.broadcastWatch.call(_this, c, !!fromOptimisticTransaction);
        }, {
            makeCacheKey: function (c) {
                var store = c.optimistic ? _this.optimisticData : _this.data;
                if (Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_8__["supportsResultCaching"])(store)) {
                    var optimistic = c.optimistic, rootId = c.rootId, variables = c.variables;
                    return store.makeCacheKey(c.query, c.callback, JSON.stringify({ optimistic: optimistic, rootId: rootId, variables: variables }));
                }
            }
        });
        _this.watchDep = Object(optimism__WEBPACK_IMPORTED_MODULE_2__["dep"])();
        _this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultConfig), config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new _policies_js__WEBPACK_IMPORTED_MODULE_10__["Policies"]({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies,
        });
        _this.data = new _entityStore_js__WEBPACK_IMPORTED_MODULE_8__["EntityStore"].Root({
            policies: _this.policies,
            resultCaching: _this.config.resultCaching,
        });
        _this.optimisticData = _this.data;
        _this.storeWriter = new _writeToStore_js__WEBPACK_IMPORTED_MODULE_7__["StoreWriter"](_this, _this.storeReader = new _readFromStore_js__WEBPACK_IMPORTED_MODULE_6__["StoreReader"]({
            cache: _this,
            addTypename: _this.addTypename,
        }));
        return _this;
    }
    InMemoryCache.prototype.restore = function (data) {
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache.prototype.read = function (options) {
        var _a = options.returnPartialData, returnPartialData = _a === void 0 ? false : _a;
        try {
            return this.storeReader.diffQueryAgainstStore({
                store: options.optimistic ? this.optimisticData : this.data,
                query: options.query,
                variables: options.variables,
                rootId: options.rootId,
                config: this.config,
                returnPartialData: returnPartialData,
            }).result || null;
        }
        catch (e) {
            if (e instanceof _core_types_common_js__WEBPACK_IMPORTED_MODULE_4__["MissingFieldError"]) {
                return null;
            }
            throw e;
        }
    };
    InMemoryCache.prototype.write = function (options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore({
                store: this.data,
                query: options.query,
                result: options.result,
                dataId: options.dataId,
                variables: options.variables,
            });
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.modify = function (options) {
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_11__["hasOwn"].call(options, "id") && !options.id) {
            return false;
        }
        var store = options.optimistic
            ? this.optimisticData
            : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.diff = function (options) {
        return this.storeReader.diffQueryAgainstStore({
            store: options.optimistic ? this.optimisticData : this.data,
            rootId: options.id || "ROOT_QUERY",
            query: options.query,
            variables: options.variables,
            returnPartialData: options.returnPartialData,
            config: this.config,
        });
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        if (!this.watches.size) {
            Object(_reactiveVars_js__WEBPACK_IMPORTED_MODULE_9__["recallCache"])(this);
        }
        this.watches.add(watch);
        if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
        }
        return function () {
            if (_this.watches.delete(watch) && !_this.watches.size) {
                Object(_reactiveVars_js__WEBPACK_IMPORTED_MODULE_9__["forgetCache"])(_this);
            }
            _this.watchDep.dirty(watch);
            _this.maybeBroadcastWatch.forget(watch);
        };
    };
    InMemoryCache.prototype.gc = function () {
        return this.optimisticData.gc();
    };
    InMemoryCache.prototype.retain = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache.prototype.release = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache.prototype.identify = function (object) {
        return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isReference"])(object) ? object.__ref :
            this.policies.identify(object)[0];
    };
    InMemoryCache.prototype.evict = function (options) {
        if (!options.id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_11__["hasOwn"].call(options, "id")) {
                return false;
            }
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { id: "ROOT_QUERY" });
        }
        try {
            ++this.txCount;
            return this.optimisticData.evict(options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.reset = function () {
        this.data.clear();
        this.optimisticData = this.data;
        this.broadcastWatches();
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.performTransaction = function (transaction, optimisticId) {
        var _this = this;
        var perform = function (layer) {
            var _a = _this, data = _a.data, optimisticData = _a.optimisticData;
            ++_this.txCount;
            if (layer) {
                _this.data = _this.optimisticData = layer;
            }
            try {
                transaction(_this);
            }
            finally {
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        var fromOptimisticTransaction = false;
        if (typeof optimisticId === 'string') {
            this.optimisticData = this.optimisticData.addLayer(optimisticId, perform);
            fromOptimisticTransaction = true;
        }
        else if (optimisticId === null) {
            perform(this.data);
        }
        else {
            perform();
        }
        this.broadcastWatches(fromOptimisticTransaction);
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["addTypenameToDocument"])(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache.prototype.broadcastWatches = function (fromOptimisticTransaction) {
        var _this = this;
        if (!this.txCount) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c, fromOptimisticTransaction); });
        }
    };
    InMemoryCache.prototype.broadcastWatch = function (c, fromOptimisticTransaction) {
        this.watchDep.dirty(c);
        this.watchDep(c);
        var diff = this.diff({
            query: c.query,
            variables: c.variables,
            optimistic: c.optimistic,
        });
        if (c.optimistic && fromOptimisticTransaction) {
            diff.fromOptimisticTransaction = true;
        }
        c.callback(diff);
    };
    return InMemoryCache;
}(_core_cache_js__WEBPACK_IMPORTED_MODULE_3__["ApolloCache"]));

//# sourceMappingURL=inMemoryCache.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/policies.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return defaultDataIdFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Policies", function() { return Policies; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _reactiveVars_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/reactiveVars.js");






function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args :
        spec.field ? Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["argumentsObjectFromField"])(spec.field, spec.variables) : null;
}
var defaultDataIdFromObject = function (_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject =
                id !== void 0 ? { id: id } :
                    _id !== void 0 ? { _id: _id } :
                        void 0;
        }
        if (id === void 0)
            id = _id;
        if (id !== void 0) {
            return __typename + ":" + ((typeof id === "number" ||
                typeof id === "string") ? id : JSON.stringify(id));
        }
    }
};
var nullKeyFieldsFn = function () { return void 0; };
var simpleKeyArgsFn = function (_args, context) { return context.fieldName; };
var mergeTrueFn = function (existing, incoming, _a) {
    var mergeObjects = _a.mergeObjects;
    return mergeObjects(existing, incoming);
};
var mergeFalseFn = function (_, incoming) { return incoming; };
var Policies = (function () {
    function Policies(config) {
        this.config = config;
        this.typePolicies = Object.create(null);
        this.toBeAdded = Object.create(null);
        this.supertypeMap = new Map();
        this.fuzzySubtypes = new Map();
        this.rootIdsByTypename = Object.create(null);
        this.rootTypenamesById = Object.create(null);
        this.usingPossibleTypes = false;
        this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ dataIdFromObject: defaultDataIdFromObject }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
        }
    }
    Policies.prototype.identify = function (object, selectionSet, fragmentMap) {
        var typename = selectionSet && fragmentMap
            ? Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getTypenameFromResult"])(object, selectionSet, fragmentMap)
            : object.__typename;
        if (typename === this.rootTypenamesById.ROOT_QUERY) {
            return ["ROOT_QUERY"];
        }
        var context = {
            typename: typename,
            selectionSet: selectionSet,
            fragmentMap: fragmentMap,
        };
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while (keyFn) {
            var specifierOrId = keyFn(object, context);
            if (Array.isArray(specifierOrId)) {
                keyFn = keyFieldsFnFromSpecifier(specifierOrId);
            }
            else {
                id = specifierOrId;
                break;
            }
        }
        id = id && String(id);
        return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies.prototype.addTypePolicies = function (typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function (typename) {
            var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["queryType", "mutationType", "subscriptionType"]);
            if (queryType)
                _this.setRootTypename("Query", typename);
            if (mutationType)
                _this.setRootTypename("Mutation", typename);
            if (subscriptionType)
                _this.setRootTypename("Subscription", typename);
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(_this.toBeAdded, typename)) {
                _this.toBeAdded[typename].push(incoming);
            }
            else {
                _this.toBeAdded[typename] = [incoming];
            }
        });
    };
    Policies.prototype.updateTypePolicy = function (typename, incoming) {
        var _this = this;
        var existing = this.getTypePolicy(typename);
        var keyFields = incoming.keyFields, fields = incoming.fields;
        function setMerge(existing, merge) {
            existing.merge =
                typeof merge === "function" ? merge :
                    merge === true ? mergeTrueFn :
                        merge === false ? mergeFalseFn :
                            existing.merge;
        }
        setMerge(existing, incoming.merge);
        existing.keyFn =
            keyFields === false ? nullKeyFieldsFn :
                Array.isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) :
                    typeof keyFields === "function" ? keyFields :
                        existing.keyFn;
        if (fields) {
            Object.keys(fields).forEach(function (fieldName) {
                var existing = _this.getFieldPolicy(typename, fieldName, true);
                var incoming = fields[fieldName];
                if (typeof incoming === "function") {
                    existing.read = incoming;
                }
                else {
                    var keyArgs = incoming.keyArgs, read = incoming.read, merge = incoming.merge;
                    existing.keyFn =
                        keyArgs === false ? simpleKeyArgsFn :
                            Array.isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) :
                                typeof keyArgs === "function" ? keyArgs :
                                    existing.keyFn;
                    if (typeof read === "function") {
                        existing.read = read;
                    }
                    setMerge(existing, merge);
                }
                if (existing.read && existing.merge) {
                    existing.keyFn = existing.keyFn || simpleKeyArgsFn;
                }
            });
        }
    };
    Policies.prototype.setRootTypename = function (which, typename) {
        if (typename === void 0) { typename = which; }
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_2__["invariant"])(!old || old === which, "Cannot change root " + which + " __typename more than once");
            if (old)
                delete this.rootIdsByTypename[old];
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies.prototype.addPossibleTypes = function (possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function (supertype) {
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function (subtype) {
                _this.getSupertypeSet(subtype, true).add(supertype);
                var match = subtype.match(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["TypeOrFieldNameRegExp"]);
                if (!match || match[0] !== subtype) {
                    _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
                }
            });
        });
    };
    Policies.prototype.getTypePolicy = function (typename) {
        var _this = this;
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(this.typePolicies, typename)) {
            var policy_1 = this.typePolicies[typename] = Object.create(null);
            policy_1.fields = Object.create(null);
            var supertypes = this.supertypeMap.get(typename);
            if (supertypes && supertypes.size) {
                supertypes.forEach(function (supertype) {
                    var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["fields"]);
                    Object.assign(policy_1, rest);
                    Object.assign(policy_1.fields, fields);
                });
            }
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) {
            this.updateTypePolicy(typename, _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["compact"].apply(void 0, inbox.splice(0)));
        }
        return this.typePolicies[typename];
    };
    Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
        if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return fieldPolicies[fieldName] || (createIfMissing && (fieldPolicies[fieldName] = Object.create(null)));
        }
    };
    Policies.prototype.getSupertypeSet = function (subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) {
            this.supertypeMap.set(subtype, supertypeSet = new Set());
        }
        return supertypeSet;
    };
    Policies.prototype.fragmentMatches = function (fragment, typename, result, variables) {
        var _this = this;
        if (!fragment.typeCondition)
            return true;
        if (!typename)
            return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype)
            return true;
        if (this.usingPossibleTypes &&
            this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [typenameSupertypeSet];
            var maybeEnqueue_1 = function (subtype) {
                var supertypeSet = _this.getSupertypeSet(subtype, false);
                if (supertypeSet &&
                    supertypeSet.size &&
                    workQueue_1.indexOf(supertypeSet) < 0) {
                    workQueue_1.push(supertypeSet);
                }
            };
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            for (var i = 0; i < workQueue_1.length; ++i) {
                var supertypeSet = workQueue_1[i];
                if (supertypeSet.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) {
                             false || ts_invariant__WEBPACK_IMPORTED_MODULE_2__["invariant"].warn("Inferring subtype " + typename + " of supertype " + supertype);
                        }
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet.forEach(maybeEnqueue_1);
                if (needToCheckFuzzySubtypes &&
                    i === workQueue_1.length - 1 &&
                    Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["selectionSetMatchesResult"])(fragment.selectionSet, result, variables)) {
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
                        var match = typename.match(regExp);
                        if (match && match[0] === typename) {
                            maybeEnqueue_1(fuzzyString);
                        }
                    });
                }
            }
        }
        return false;
    };
    Policies.prototype.hasKeyArgs = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
    };
    Policies.prototype.getStoreFieldName = function (fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename: typename,
                fieldName: fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables,
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while (keyFn) {
                var specifierOrString = keyFn(args, context);
                if (Array.isArray(specifierOrString)) {
                    keyFn = keyArgsFnFromSpecifier(specifierOrString);
                }
                else {
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) {
            storeFieldName = fieldSpec.field
                ? Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["storeKeyNameFromField"])(fieldSpec.field, fieldSpec.variables)
                : Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getStoreKeyName"])(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        return fieldName === Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName)
            ? storeFieldName
            : fieldName + ":" + storeFieldName;
    };
    Policies.prototype.readField = function (options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference)
            return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField)
            return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename)
                options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objectOrReference)
                ? objectOrReference.__ref
                : objectOrReference, storeFieldName));
            return _reactiveVars_js__WEBPACK_IMPORTED_MODULE_5__["cacheSlot"].withValue(this.cache, read, [existing, readOptions]);
        }
        return existing;
    };
    Policies.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge = policy && policy.merge;
        if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
        }
        return merge;
    };
    Policies.prototype.runMergeFunction = function (existing, incoming, _a, context, storage) {
        var field = _a.field, typename = _a.typename, merge = _a.merge;
        if (merge === mergeTrueFn) {
            return makeMergeObjectsFunction(context.store.getFieldValue)(existing, incoming);
        }
        if (merge === mergeFalseFn) {
            return incoming;
        }
        return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename: typename, fieldName: field.name.value, field: field, variables: context.variables }, context, storage || Object.create(null)));
    };
    return Policies;
}());

function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a = context.store, getFieldValue = _a.getFieldValue, toReference = _a.toReference, canRead = _a.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName: fieldName,
        storeFieldName: storeFieldName,
        variables: variables,
        isReference: _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"],
        toReference: toReference,
        storage: storage,
        cache: policies.cache,
        canRead: canRead,
        readField: function (fieldNameOrOptions, from) {
            var options = typeof fieldNameOrOptions === "string" ? {
                fieldName: fieldNameOrOptions,
                from: from,
            } : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fieldNameOrOptions);
            if (void 0 === options.from) {
                options.from = objectOrReference;
            }
            if (void 0 === options.variables) {
                options.variables = variables;
            }
            return policies.readField(options, context);
        },
        mergeObjects: makeMergeObjectsFunction(getFieldValue),
    };
}
function makeMergeObjectsFunction(getFieldValue) {
    return function mergeObjects(existing, incoming) {
        if (Array.isArray(existing) || Array.isArray(incoming)) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_2__["InvariantError"]("Cannot automatically merge arrays");
        }
        if (existing && typeof existing === "object" &&
            incoming && typeof incoming === "object") {
            var eType = getFieldValue(existing, "__typename");
            var iType = getFieldValue(incoming, "__typename");
            var typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer ||
                !Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["storeValueIsStoreObject"])(existing) ||
                !Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["storeValueIsStoreObject"])(incoming)) {
                return incoming;
            }
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, existing), incoming);
        }
        return incoming;
    };
}
function keyArgsFnFromSpecifier(specifier) {
    return function (args, context) {
        return args ? context.fieldName + ":" + JSON.stringify(computeKeyObject(args, specifier, false)) : context.fieldName;
    };
}
function keyFieldsFnFromSpecifier(specifier) {
    var trie = new optimism__WEBPACK_IMPORTED_MODULE_1__["KeyTrie"](_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["canUseWeakMap"]);
    return function (object, context) {
        var aliasMap;
        if (context.selectionSet && context.fragmentMap) {
            var info = trie.lookupArray([
                context.selectionSet,
                context.fragmentMap,
            ]);
            aliasMap = info.aliasMap || (info.aliasMap = makeAliasMap(context.selectionSet, context.fragmentMap));
        }
        var keyObject = context.keyObject =
            computeKeyObject(object, specifier, true, aliasMap);
        return context.typename + ":" + JSON.stringify(keyObject);
    };
}
function makeAliasMap(selectionSet, fragmentMap) {
    var map = Object.create(null);
    var workQueue = new Set([selectionSet]);
    workQueue.forEach(function (selectionSet) {
        selectionSet.selections.forEach(function (selection) {
            if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection)) {
                if (selection.alias) {
                    var responseKey = selection.alias.value;
                    var storeKey = selection.name.value;
                    if (storeKey !== responseKey) {
                        var aliases = map.aliases || (map.aliases = Object.create(null));
                        aliases[storeKey] = responseKey;
                    }
                }
                if (selection.selectionSet) {
                    var subsets = map.subsets || (map.subsets = Object.create(null));
                    subsets[selection.name.value] =
                        makeAliasMap(selection.selectionSet, fragmentMap);
                }
            }
            else {
                var fragment = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentFromSelection"])(selection, fragmentMap);
                if (fragment) {
                    workQueue.add(fragment.selectionSet);
                }
            }
        });
    });
    return map;
}
function computeKeyObject(response, specifier, strict, aliasMap) {
    var keyObj = Object.create(null);
    var prevKey;
    specifier.forEach(function (s) {
        if (Array.isArray(s)) {
            if (typeof prevKey === "string") {
                var subsets = aliasMap && aliasMap.subsets;
                var subset = subsets && subsets[prevKey];
                keyObj[prevKey] = computeKeyObject(response[prevKey], s, strict, subset);
            }
        }
        else {
            var aliases = aliasMap && aliasMap.aliases;
            var responseName = aliases && aliases[s] || s;
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(response, responseName)) {
                keyObj[prevKey = s] = response[responseName];
            }
            else {
                 false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_2__["invariant"])(!strict, "Missing field '" + responseName + "' while computing key fields");
                prevKey = void 0;
            }
        }
    });
    return keyObj;
}
//# sourceMappingURL=policies.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/reactiveVars.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheSlot", function() { return cacheSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgetCache", function() { return forgetCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recallCache", function() { return recallCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeVar", function() { return makeVar; });
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@wry/context/lib/context.esm.js");


var cacheSlot = new _wry_context__WEBPACK_IMPORTED_MODULE_1__["Slot"]();
function consumeAndIterate(set, callback) {
    if (set.size) {
        var items_1 = [];
        set.forEach(function (item) { return items_1.push(item); });
        set.clear();
        items_1.forEach(callback);
    }
}
var cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
    var info = cacheInfoMap.get(cache);
    if (!info) {
        cacheInfoMap.set(cache, info = {
            vars: new Set,
            dep: Object(optimism__WEBPACK_IMPORTED_MODULE_0__["dep"])(),
        });
    }
    return info;
}
function forgetCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.forgetCache(cache); });
}
function recallCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.attachCache(cache); });
}
function makeVar(value) {
    var caches = new Set();
    var listeners = new Set();
    var rv = function (newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches.forEach(function (cache) {
                    getCacheInfo(cache).dep.dirty(rv);
                    broadcast(cache);
                });
                consumeAndIterate(listeners, function (listener) { return listener(value); });
            }
        }
        else {
            var cache = cacheSlot.getValue();
            if (cache) {
                attach(cache);
                getCacheInfo(cache).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = function (listener) {
        listeners.add(listener);
        return function () {
            listeners.delete(listener);
        };
    };
    var attach = rv.attachCache = function (cache) {
        caches.add(cache);
        getCacheInfo(cache).vars.add(rv);
        return rv;
    };
    rv.forgetCache = function (cache) { return caches.delete(cache); };
    return rv;
}
function broadcast(cache) {
    if (cache.broadcastWatches) {
        cache.broadcastWatches();
    }
}
//# sourceMappingURL=reactiveVars.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/readFromStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreReader", function() { return StoreReader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _entityStore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/core/types/common.js");







;
function missingFromInvariant(err, context) {
    return new _core_types_common_js__WEBPACK_IMPORTED_MODULE_6__["MissingFieldError"](err.message, context.path.slice(), context.query, context.clientOnly, context.variables);
}
var StoreReader = (function () {
    function StoreReader(config) {
        var _this = this;
        this.config = config;
        this.executeSelectionSet = Object(optimism__WEBPACK_IMPORTED_MODULE_1__["wrap"])(function (options) { return _this.execSelectionSetImpl(options); }, {
            keyArgs: function (options) {
                return [
                    options.selectionSet,
                    options.objectOrReference,
                    options.context,
                ];
            },
            makeCacheKey: function (selectionSet, parent, context) {
                if (Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_4__["supportsResultCaching"])(context.store)) {
                    return context.store.makeCacheKey(selectionSet, Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(parent) ? parent.__ref : parent, context.varString);
                }
            }
        });
        this.knownResults = new WeakMap();
        this.executeSubSelectedArray = Object(optimism__WEBPACK_IMPORTED_MODULE_1__["wrap"])(function (options) {
            return _this.execSubSelectedArrayImpl(options);
        }, {
            makeCacheKey: function (_a) {
                var field = _a.field, array = _a.array, context = _a.context;
                if (Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_4__["supportsResultCaching"])(context.store)) {
                    return context.store.makeCacheKey(field, array, context.varString);
                }
            }
        });
        this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ addTypename: true }, config);
    }
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? 'ROOT_QUERY' : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c;
        var policies = this.config.cache.policies;
        variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getDefaultValues"])(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getQueryDefinition"])(query))), variables);
        var execResult = this.executeSelectionSet({
            selectionSet: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getMainDefinition"])(query).selectionSet,
            objectOrReference: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(rootId),
            context: {
                store: store,
                query: query,
                policies: policies,
                variables: variables,
                varString: JSON.stringify(variables),
                fragmentMap: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["createFragmentMap"])(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentDefinitions"])(query)),
                path: [],
                clientOnly: false,
            },
        });
        var hasMissingFields = execResult.missing && execResult.missing.length > 0;
        if (hasMissingFields && !returnPartialData) {
            throw execResult.missing[0];
        }
        return {
            result: execResult.result,
            missing: execResult.missing,
            complete: !hasMissingFields,
        };
    };
    StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
        if (Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_4__["supportsResultCaching"])(context.store) &&
            this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context);
            if (latest && result === latest.result) {
                return true;
            }
        }
        return false;
    };
    StoreReader.prototype.execSelectionSetImpl = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, context = _a.context;
        if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objectOrReference) &&
            !context.policies.rootTypenamesById[objectOrReference.__ref] &&
            !context.store.has(objectOrReference.__ref)) {
            return {
                result: {},
                missing: [missingFromInvariant( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_2__["InvariantError"]("Dangling reference to missing " + objectOrReference.__ref + " object"), context)],
            };
        }
        var variables = context.variables, policies = context.policies, store = context.store;
        var objectsToMerge = [];
        var finalResult = { result: null };
        var typename = store.getFieldValue(objectOrReference, "__typename");
        if (this.config.addTypename &&
            typeof typename === "string" &&
            !policies.rootIdsByTypename[typename]) {
            objectsToMerge.push({ __typename: typename });
        }
        function getMissing() {
            return finalResult.missing || (finalResult.missing = []);
        }
        function handleMissing(result) {
            var _a;
            if (result.missing)
                (_a = getMissing()).push.apply(_a, result.missing);
            return result.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a;
            if (!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["shouldInclude"])(selection, variables))
                return;
            if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference,
                }, context);
                var resultName = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(selection);
                context.path.push(resultName);
                var wasClientOnly = context.clientOnly;
                context.clientOnly = wasClientOnly || !!(selection.directives &&
                    selection.directives.some(function (d) { return d.name.value === "client"; }));
                if (fieldValue === void 0) {
                    if (!_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["addTypenameToDocument"].added(selection)) {
                        getMissing().push(missingFromInvariant( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_2__["InvariantError"]("Can't find field '" + selection.name.value + "' on " + (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objectOrReference)
                            ? objectOrReference.__ref + " object"
                            : "object " + JSON.stringify(objectOrReference, null, 2))), context));
                    }
                }
                else if (Array.isArray(fieldValue)) {
                    fieldValue = handleMissing(_this.executeSubSelectedArray({
                        field: selection,
                        array: fieldValue,
                        context: context,
                    }));
                }
                else if (!selection.selectionSet) {
                    if (true) {
                        assertSelectionSetForIdValue(context.store, selection, fieldValue);
                        Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["maybeDeepFreeze"])(fieldValue);
                    }
                }
                else if (fieldValue != null) {
                    fieldValue = handleMissing(_this.executeSelectionSet({
                        selectionSet: selection.selectionSet,
                        objectOrReference: fieldValue,
                        context: context,
                    }));
                }
                if (fieldValue !== void 0) {
                    objectsToMerge.push((_a = {}, _a[resultName] = fieldValue, _a));
                }
                context.clientOnly = wasClientOnly;
                Object(ts_invariant__WEBPACK_IMPORTED_MODULE_2__["invariant"])(context.path.pop() === resultName);
            }
            else {
                var fragment = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentFromSelection"])(selection, context.fragmentMap);
                if (fragment && policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        finalResult.result = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["mergeDeepArray"])(objectsToMerge);
        if (true) {
            Object.freeze(finalResult.result);
        }
        this.knownResults.set(finalResult.result, selectionSet);
        return finalResult;
    };
    StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
        var _this = this;
        var field = _a.field, array = _a.array, context = _a.context;
        var missing;
        function handleMissing(childResult, i) {
            if (childResult.missing) {
                missing = missing || [];
                missing.push.apply(missing, childResult.missing);
            }
            Object(ts_invariant__WEBPACK_IMPORTED_MODULE_2__["invariant"])(context.path.pop() === i);
            return childResult.result;
        }
        if (field.selectionSet) {
            array = array.filter(context.store.canRead);
        }
        array = array.map(function (item, i) {
            if (item === null) {
                return null;
            }
            context.path.push(i);
            if (Array.isArray(item)) {
                return handleMissing(_this.executeSubSelectedArray({
                    field: field,
                    array: item,
                    context: context,
                }), i);
            }
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    objectOrReference: item,
                    context: context,
                }), i);
            }
            if (true) {
                assertSelectionSetForIdValue(context.store, field, item);
            }
            Object(ts_invariant__WEBPACK_IMPORTED_MODULE_2__["invariant"])(context.path.pop() === i);
            return item;
        });
        if (true) {
            Object.freeze(array);
        }
        return { result: array, missing: missing };
    };
    return StoreReader;
}());

function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = new Set([fieldValue]);
        workSet_1.forEach(function (value) {
            if (value && typeof value === "object") {
                 false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_2__["invariant"])(!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(value), "Missing selection set for object of type " + Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["getTypenameFromStoreObject"])(store, value) + " returned for query field " + field.name.value);
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}
//# sourceMappingURL=readFromStore.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/types.js":
/***/ (function(module, exports) {

;
;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/writeToStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreWriter", function() { return StoreWriter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/helpers.js");





;
var StoreWriter = (function () {
    function StoreWriter(cache, reader) {
        this.cache = cache;
        this.reader = reader;
    }
    StoreWriter.prototype.writeToStore = function (_a) {
        var query = _a.query, result = _a.result, dataId = _a.dataId, store = _a.store, variables = _a.variables;
        var operationDefinition = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getOperationDefinition"])(query);
        var merger = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["makeProcessedFieldsMerger"])();
        variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getDefaultValues"])(operationDefinition)), variables);
        var ref = this.processSelectionSet({
            result: result || Object.create(null),
            dataId: dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: { map: new Map },
            context: {
                store: store,
                written: Object.create(null),
                merge: function (existing, incoming) {
                    return merger.merge(existing, incoming);
                },
                variables: variables,
                varString: JSON.stringify(variables),
                fragmentMap: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["createFragmentMap"])(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentDefinitions"])(query)),
            },
        });
        if (!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(ref)) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Could not identify object " + JSON.stringify(result));
        }
        store.retain(ref.__ref);
        return ref;
    };
    StoreWriter.prototype.processSelectionSet = function (_a) {
        var _this = this;
        var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, mergeTree = _a.mergeTree;
        var policies = this.cache.policies;
        var _b = policies.identify(result, selectionSet, context.fragmentMap), id = _b[0], keyObject = _b[1];
        dataId = dataId || id;
        if ("string" === typeof dataId) {
            var sets = context.written[dataId] || (context.written[dataId] = []);
            var ref = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(dataId);
            if (sets.indexOf(selectionSet) >= 0)
                return ref;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, ref, selectionSet, context)) {
                return ref;
            }
        }
        var incomingFields = Object.create(null);
        if (keyObject) {
            incomingFields = context.merge(incomingFields, keyObject);
        }
        var typename = (dataId && policies.rootTypenamesById[dataId]) ||
            Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getTypenameFromResult"])(result, selectionSet, context.fragmentMap) ||
            (dataId && context.store.get(dataId, "__typename"));
        if ("string" === typeof typename) {
            incomingFields.__typename = typename;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a;
            if (!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["shouldInclude"])(selection, context.variables))
                return;
            if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection)) {
                var resultFieldKey = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(selection);
                var value = result[resultFieldKey];
                if (typeof value !== 'undefined') {
                    var storeFieldName = policies.getStoreFieldName({
                        typename: typename,
                        fieldName: selection.name.value,
                        field: selection,
                        variables: context.variables,
                    });
                    var childTree = getChildMergeTree(mergeTree, storeFieldName);
                    var incomingValue = _this.processFieldValue(value, selection, context, childTree);
                    var childTypename = selection.selectionSet
                        && context.store.getFieldValue(incomingValue, "__typename")
                        || void 0;
                    var merge = policies.getMergeFunction(typename, selection.name.value, childTypename);
                    if (merge) {
                        childTree.info = {
                            field: selection,
                            typename: typename,
                            merge: merge,
                        };
                    }
                    else {
                        maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                    }
                    incomingFields = context.merge(incomingFields, (_a = {},
                        _a[storeFieldName] = incomingValue,
                        _a));
                }
                else if (policies.usingPossibleTypes &&
                    !Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["hasDirectives"])(["defer", "client"], selection)) {
                    throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Missing field '" + resultFieldKey + "' in " + JSON.stringify(result, null, 2).substring(0, 100));
                }
            }
            else {
                var fragment = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentFromSelection"])(selection, context.fragmentMap);
                if (fragment &&
                    policies.fragmentMatches(fragment, typename, result, context.variables)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        if ("string" === typeof dataId) {
            var entityRef_1 = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(dataId);
            if (mergeTree.map.size) {
                incomingFields = this.applyMerges(mergeTree, entityRef_1, incomingFields, context);
            }
            if (true) {
                var hasSelectionSet_1 = function (storeFieldName) {
                    return fieldsWithSelectionSets_1.has(Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName));
                };
                var fieldsWithSelectionSets_1 = new Set();
                workSet.forEach(function (selection) {
                    if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection) && selection.selectionSet) {
                        fieldsWithSelectionSets_1.add(selection.name.value);
                    }
                });
                var hasMergeFunction_1 = function (storeFieldName) {
                    var childTree = mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(incomingFields).forEach(function (storeFieldName) {
                    if (hasSelectionSet_1(storeFieldName) &&
                        !hasMergeFunction_1(storeFieldName)) {
                        warnAboutDataLoss(entityRef_1, incomingFields, storeFieldName, context.store);
                    }
                });
            }
            context.store.merge(dataId, incomingFields);
            return entityRef_1;
        }
        return incomingFields;
    };
    StoreWriter.prototype.processFieldValue = function (value, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value === null) {
            return  false ? undefined : Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(value);
        }
        if (Array.isArray(value)) {
            return value.map(function (item, i) {
                var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
                maybeRecycleChildMergeTree(mergeTree, i);
                return value;
            });
        }
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context: context,
            mergeTree: mergeTree,
        });
    };
    StoreWriter.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
        var _a;
        var _this = this;
        if (mergeTree.map.size && !Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(incoming)) {
            var e_1 = (!Array.isArray(incoming) &&
                (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(existing) || Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["storeValueIsStoreObject"])(existing))) ? existing : void 0;
            var i_1 = incoming;
            if (e_1 && !getStorageArgs) {
                getStorageArgs = [Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(e_1) ? e_1.__ref : e_1];
            }
            var changedFields_1;
            var getValue_1 = function (from, name) {
                return Array.isArray(from)
                    ? (typeof name === "number" ? from[name] : void 0)
                    : context.store.getFieldValue(from, String(name));
            };
            mergeTree.map.forEach(function (childTree, storeFieldName) {
                if (getStorageArgs) {
                    getStorageArgs.push(storeFieldName);
                }
                var eVal = getValue_1(e_1, storeFieldName);
                var iVal = getValue_1(i_1, storeFieldName);
                var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields_1 = changedFields_1 || new Map;
                    changedFields_1.set(storeFieldName, aVal);
                }
                if (getStorageArgs) {
                    Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(getStorageArgs.pop() === storeFieldName);
                }
            });
            if (changedFields_1) {
                incoming = (Array.isArray(i_1) ? i_1.slice(0) : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, i_1));
                changedFields_1.forEach(function (value, name) {
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) {
            return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
        }
        return incoming;
    };
    return StoreWriter;
}());

var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
    var map = _a.map;
    if (!map.has(name)) {
        map.set(name, emptyMergeTreePool.pop() || { map: new Map });
    }
    return map.get(name);
}
function maybeRecycleChildMergeTree(_a, name) {
    var map = _a.map;
    var childTree = map.get(name);
    if (childTree &&
        !childTree.info &&
        !childTree.map.size) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
var warnings = new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function (objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing)
        return;
    var incoming = getChild(incomingObj);
    if (!incoming)
        return;
    if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(existing))
        return;
    if (Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(existing, incoming))
        return;
    if (Object.keys(existing).every(function (key) { return store.getFieldValue(incoming, key) !== void 0; })) {
        return;
    }
    var parentType = store.getFieldValue(existingRef, "__typename") ||
        store.getFieldValue(incomingObj, "__typename");
    var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName);
    var typeDotName = parentType + "." + fieldName;
    if (warnings.has(typeDotName))
        return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!Array.isArray(existing) &&
        !Array.isArray(incoming)) {
        [existing, incoming].forEach(function (child) {
            var typename = store.getFieldValue(child, "__typename");
            if (typeof typename === "string" &&
                !childTypenames.includes(typename)) {
                childTypenames.push(typename);
            }
        });
    }
     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Cache data may be lost when replacing the " + fieldName + " field of a " + parentType + " object.\n\nTo address this problem (which is not a bug in Apollo Client), " + (childTypenames.length
        ? "either ensure all objects of type " +
            childTypenames.join(" and ") + " have an ID or a custom merge function, or "
        : "") + "define a custom merge function for the " + typeDotName + " field, so InMemoryCache can safely merge these objects:\n\n  existing: " + JSON.stringify(existing).slice(0, 1000) + "\n  incoming: " + JSON.stringify(incoming).slice(0, 1000) + "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n");
}
//# sourceMappingURL=writeToStore.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/ApolloClient.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return ApolloClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/version.js");
/* harmony import */ var _link_http_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/index.js");
/* harmony import */ var _QueryManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/QueryManager.js");
/* harmony import */ var _LocalState_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/LocalState.js");








var hasSuggestedDevtools = false;
function mergeOptions(defaults, options) {
    return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["compact"])(defaults, options, options.variables && {
        variables: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaults.variables), options.variables),
    });
}
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.defaultOptions = {};
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === 'object' &&
            !window.__APOLLO_CLIENT__ &&
            "development" !== 'production' : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link) {
            link = uri
                ? new _link_http_index_js__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]({ uri: uri, credentials: credentials, headers: headers })
                : _link_core_index_js__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"].empty();
        }
        if (!cache) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("To initialize Apollo Client, you must specify a 'cache' property " +
                "in the options object. \n" +
                "For more information, please visit: https://go.apollo.dev/c/docs");
        }
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || {};
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        if (connectToDevTools && typeof window === 'object') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && "development" !== 'production') {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self &&
                !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                var nav = window.navigator;
                var ua = nav && nav.userAgent;
                var url = void 0;
                if (typeof ua === "string") {
                    if (ua.indexOf("Chrome/") > -1) {
                        url = "https://chrome.google.com/webstore/detail/" +
                            "apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                    }
                    else if (ua.indexOf("Firefox/") > -1) {
                        url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                    }
                }
                if (url) {
                    ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].log("Download the Apollo DevTools for a better development " +
                        "experience: " + url);
                }
            }
        }
        this.version = _version_js__WEBPACK_IMPORTED_MODULE_4__["version"];
        this.localState = new _LocalState_js__WEBPACK_IMPORTED_MODULE_7__["LocalState"]({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new _QueryManager_js__WEBPACK_IMPORTED_MODULE_6__["QueryManager"]({
            cache: this.cache,
            link: this.link,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: connectToDevTools ? function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.getQueryStore(),
                            mutations: _this.queryManager.mutationStore || {},
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            } : void 0,
        });
    }
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = mergeOptions(this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = mergeOptions(this.defaultOptions.query, options);
        }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' +
            'client.query can only return a single result. Please use client.watchQuery ' +
            'to receive multiple results from the cache and the network, or consider ' +
            'using a different fetchPolicy, such as cache-first or network-only.');
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = mergeOptions(this.defaultOptions.mutate, options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.writeFragment = function (options) {
        this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return Object(_link_core_index_js__WEBPACK_IMPORTED_MODULE_2__["execute"])(this.link, payload);
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore(); })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore(); })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient.prototype.setLink = function (newLink) {
        this.link = this.queryManager.link = newLink;
    };
    return ApolloClient;
}());

//# sourceMappingURL=ApolloClient.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/LocalState.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalState", function() { return LocalState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/index.js");





var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["mergeDeep"])(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["mergeDeep"])(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, remoteResult), { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["hasDirectives"])(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["removeClientSetsFromDocument"])(document);
    };
    LocalState.prototype.prepareContext = function (context) {
        var cache = this.cache;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { cache: cache,
            getCacheKey: function (obj) {
                return cache.identify(obj);
            } });
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variables), data.exportedVariables)); })];
                }
                return [2, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        Object(graphql__WEBPACK_IMPORTED_MODULE_1__["visit"])(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql__WEBPACK_IMPORTED_MODULE_1__["BREAK"];
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["buildQueryFromSelectionSet"])(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                mainDefinition = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getMainDefinition"])(document);
                fragments = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentDefinitions"])(document);
                fragmentMap = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["createFragmentMap"])(fragments);
                definitionOperation = mainDefinition
                    .operation;
                defaultOperationType = definitionOperation
                    ? definitionOperation.charAt(0).toUpperCase() +
                        definitionOperation.slice(1)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { cache: cache,
                        client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        if (!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["shouldInclude"])(selection, variables)) {
                            return [2];
                        }
                        if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection)) {
                            return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isInlineFragment"])(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_2__["invariant"])(fragment, "No fragment named " + selection.name.value);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["mergeDeepArray"])(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, rootValue, execContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(_cache_index_js__WEBPACK_IMPORTED_MODULE_4__["cacheSlot"].withValue(this.cache, resolve, [
                                rootValue,
                                Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["argumentsObjectFromField"])(field, variables),
                                execContext.context,
                                { field: field, fragmentMap: execContext.fragmentMap },
                            ]));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, item, execContext);
            }
        }));
    };
    return LocalState;
}());

//# sourceMappingURL=LocalState.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/ObservableQuery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return ObservableQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _Reobserver_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/Reobserver.js");






var warnedAboutUpdateQuery = false;
var ObservableQuery = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
        var _this = _super.call(this, function (observer) {
            return _this.onSubscribe(observer);
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.observer = {
            next: function (result) {
                if (_this.lastError || _this.isDifferentFromLastResult(result)) {
                    _this.updateLastResult(result);
                    Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["iterateObserversSafely"])(_this.observers, 'next', result);
                }
            },
            error: function (error) {
                _this.updateLastResult(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.lastResult), { error: error, errors: error.graphQLErrors, networkStatus: _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].error, loading: false }));
                Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["iterateObserversSafely"])(_this.observers, 'error', _this.lastError = error);
            },
        };
        _this.isTornDown = false;
        _this.options = options;
        _this.queryId = queryManager.generateQueryId();
        var opDef = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["getOperationDefinition"])(options.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        _this.queryManager = queryManager;
        _this.queryInfo = queryInfo;
        return _this;
    }
    Object.defineProperty(ObservableQuery.prototype, "variables", {
        get: function () {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var observer = {
                next: function (result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery.prototype.getCurrentResult = function (saveAsLastResult) {
        if (saveAsLastResult === void 0) { saveAsLastResult = true; }
        var lastResult = this.lastResult;
        var networkStatus = this.queryInfo.networkStatus ||
            (lastResult && lastResult.networkStatus) ||
            _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready;
        var result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, lastResult), { loading: Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["isNetworkRequestInFlight"])(networkStatus), networkStatus: networkStatus });
        if (this.isTornDown) {
            return result;
        }
        var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? 'cache-first' : _a;
        if (fetchPolicy === 'no-cache' ||
            fetchPolicy === 'network-only') {
            delete result.partial;
        }
        else if (!result.data ||
            !this.queryManager.transform(this.options.query).hasForcedResolvers) {
            var diff = this.queryInfo.getDiff();
            result.data = (diff.complete ||
                this.options.returnPartialData) ? diff.result : void 0;
            if (diff.complete) {
                if (result.networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading &&
                    (fetchPolicy === 'cache-first' ||
                        fetchPolicy === 'cache-only')) {
                    result.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready;
                    result.loading = false;
                }
                delete result.partial;
            }
            else {
                result.partial = true;
            }
        }
        if (saveAsLastResult) {
            this.updateLastResult(result);
        }
        return result;
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
        return !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(this.lastResultSnapshot, newResult);
    };
    ObservableQuery.prototype.getLastResult = function () {
        return this.lastResult;
    };
    ObservableQuery.prototype.getLastError = function () {
        return this.lastError;
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.lastResult;
        delete this.lastResultSnapshot;
        delete this.lastError;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var reobserveOptions = {
            pollInterval: 0,
        };
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy !== 'no-cache' &&
            fetchPolicy !== 'cache-and-network') {
            reobserveOptions.fetchPolicy = 'network-only';
            reobserveOptions.nextFetchPolicy = fetchPolicy || "cache-first";
        }
        if (variables && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(this.options.variables, variables)) {
            reobserveOptions.variables = this.options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options.variables), variables);
        }
        return this.newReobserver(false).reobserve(reobserveOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].refetch);
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        var combinedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (fetchMoreOptions.query ? fetchMoreOptions : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), fetchMoreOptions), { variables: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options.variables), fetchMoreOptions.variables) }))), { fetchPolicy: "no-cache" });
        var qid = this.queryManager.generateQueryId();
        if (combinedOptions.notifyOnNetworkStatusChange) {
            this.queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].fetchMore;
            this.observe();
        }
        return this.queryManager.fetchQuery(qid, combinedOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].fetchMore).then(function (fetchMoreResult) {
            var data = fetchMoreResult.data;
            var updateQuery = fetchMoreOptions.updateQuery;
            if (updateQuery) {
                if ( true &&
                    !warnedAboutUpdateQuery) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore.");
                    warnedAboutUpdateQuery = true;
                }
                _this.updateQuery(function (previous) { return updateQuery(previous, {
                    fetchMoreResult: data,
                    variables: combinedOptions.variables,
                }); });
            }
            else {
                _this.queryManager.cache.writeQuery({
                    query: combinedOptions.query,
                    variables: combinedOptions.variables,
                    data: data,
                });
            }
            return fetchMoreResult;
        }).finally(function () {
            _this.queryManager.stopQuery(qid);
            _this.reobserve();
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery.prototype.setVariables = function (variables) {
        if (Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(this.variables, variables)) {
            return this.observers.size
                ? this.result()
                : Promise.resolve();
        }
        this.options.variables = variables;
        if (!this.observers.size) {
            return Promise.resolve();
        }
        var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? 'cache-first' : _a;
        var reobserveOptions = {
            fetchPolicy: fetchPolicy,
            variables: variables,
        };
        if (fetchPolicy !== 'cache-first' &&
            fetchPolicy !== 'no-cache' &&
            fetchPolicy !== 'network-only') {
            reobserveOptions.fetchPolicy = 'cache-and-network';
            reobserveOptions.nextFetchPolicy = fetchPolicy;
        }
        return this.reobserve(reobserveOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].setVariables);
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var _a;
        var queryManager = this.queryManager;
        var result = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            previousResult: (_a = this.lastResult) === null || _a === void 0 ? void 0 : _a.data,
            returnPartialData: true,
            optimistic: false,
        }).result;
        var newResult = mapFn(result, {
            variables: this.variables,
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables,
            });
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        this.getReobserver().updateOptions({ pollInterval: pollInterval });
    };
    ObservableQuery.prototype.stopPolling = function () {
        if (this.reobserver) {
            this.reobserver.updateOptions({ pollInterval: 0 });
        }
    };
    ObservableQuery.prototype.updateLastResult = function (newResult) {
        var previousResult = this.lastResult;
        this.lastResult = newResult;
        this.lastResultSnapshot = this.queryManager.assumeImmutableResults
            ? newResult
            : Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(newResult);
        if (!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(newResult.errors)) {
            delete this.lastError;
        }
        return previousResult;
    };
    ObservableQuery.prototype.onSubscribe = function (observer) {
        var _this = this;
        if (observer === this.observer) {
            return function () { };
        }
        try {
            var subObserver = observer._subscription._observer;
            if (subObserver && !subObserver.error) {
                subObserver.error = defaultSubscriptionObserverErrorCallback;
            }
        }
        catch (_a) { }
        var first = !this.observers.size;
        this.observers.add(observer);
        if (this.lastError) {
            observer.error && observer.error(this.lastError);
        }
        else if (this.lastResult) {
            observer.next && observer.next(this.lastResult);
        }
        if (first) {
            this.reobserve().catch(function (_) {
            });
        }
        return function () {
            if (_this.observers.delete(observer) && !_this.observers.size) {
                _this.tearDownQuery();
            }
        };
    };
    ObservableQuery.prototype.getReobserver = function () {
        return this.reobserver || (this.reobserver = this.newReobserver(true));
    };
    ObservableQuery.prototype.newReobserver = function (shareOptions) {
        var _this = this;
        var _a = this, queryManager = _a.queryManager, queryId = _a.queryId;
        queryManager.setObservableQuery(this);
        return new _Reobserver_js__WEBPACK_IMPORTED_MODULE_5__["Reobserver"](this.observer, shareOptions ? this.options : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), function (currentOptions, newNetworkStatus) {
            queryManager.setObservableQuery(_this);
            return queryManager.fetchQueryObservable(queryId, currentOptions, newNetworkStatus);
        }, !queryManager.ssrMode && (function () { return !Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["isNetworkRequestInFlight"])(_this.queryInfo.networkStatus); }));
    };
    ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
        this.isTornDown = false;
        return this.getReobserver().reobserve(newOptions, newNetworkStatus);
    };
    ObservableQuery.prototype.observe = function () {
        this.observer.next(this.getCurrentResult(false));
    };
    ObservableQuery.prototype.hasObservers = function () {
        return this.observers.size > 0;
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        if (this.isTornDown)
            return;
        if (this.reobserver) {
            this.reobserver.stop();
            delete this.reobserver;
        }
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
    };
    return ObservableQuery;
}(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["Observable"]));

Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["fixObservableSubclass"])(ObservableQuery);
function defaultSubscriptionObserverErrorCallback(error) {
     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].error('Unhandled error', error.message, error.stack);
}
//# sourceMappingURL=ObservableQuery.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/QueryInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryInfo", function() { return QueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldWriteResult", function() { return shouldWriteResult; });
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/networkStatus.js");



var destructiveMethodCounts = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__["canUseWeakMap"] ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
    var original = cache[methodName];
    if (typeof original === "function") {
        cache[methodName] = function () {
            destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
            return original.apply(this, arguments);
        };
    }
}
function cancelNotifyTimeout(info) {
    if (info["notifyTimeout"]) {
        clearTimeout(info["notifyTimeout"]);
        info["notifyTimeout"] = void 0;
    }
}
var QueryInfo = (function () {
    function QueryInfo(cache) {
        this.cache = cache;
        this.listeners = new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = new Set();
        this.stopped = false;
        this.dirty = false;
        this.diff = null;
        this.observableQuery = null;
        if (!destructiveMethodCounts.has(cache)) {
            destructiveMethodCounts.set(cache, 0);
            wrapDestructiveCacheMethod(cache, "evict");
            wrapDestructiveCacheMethod(cache, "modify");
            wrapDestructiveCacheMethod(cache, "reset");
        }
    }
    QueryInfo.prototype.init = function (query) {
        var networkStatus = query.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].loading;
        if (this.variables &&
            this.networkStatus !== _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].loading &&
            !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_0__["equal"])(this.variables, query.variables)) {
            networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].setVariables;
        }
        if (!Object(_wry_equality__WEBPACK_IMPORTED_MODULE_0__["equal"])(query.variables, this.variables)) {
            this.diff = null;
        }
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: networkStatus,
        });
        if (query.observableQuery) {
            this.setObservableQuery(query.observableQuery);
        }
        if (query.lastRequestId) {
            this.lastRequestId = query.lastRequestId;
        }
        return this;
    };
    QueryInfo.prototype.reset = function () {
        cancelNotifyTimeout(this);
        this.diff = null;
        this.dirty = false;
    };
    QueryInfo.prototype.getDiff = function (variables) {
        if (variables === void 0) { variables = this.variables; }
        if (this.diff && Object(_wry_equality__WEBPACK_IMPORTED_MODULE_0__["equal"])(variables, this.variables)) {
            return this.diff;
        }
        this.updateWatch(this.variables = variables);
        return this.diff = this.cache.diff({
            query: this.document,
            variables: variables,
            returnPartialData: true,
            optimistic: true,
        });
    };
    QueryInfo.prototype.setDiff = function (diff) {
        var _this = this;
        var oldDiff = this.diff;
        this.diff = diff;
        if (!this.dirty &&
            (diff && diff.result) !== (oldDiff && oldDiff.result)) {
            this.dirty = true;
            if (!this.notifyTimeout) {
                this.notifyTimeout = setTimeout(function () { return _this.notify(); }, 0);
            }
        }
    };
    QueryInfo.prototype.setObservableQuery = function (oq) {
        var _this = this;
        if (oq === this.observableQuery)
            return;
        if (this.oqListener) {
            this.listeners.delete(this.oqListener);
        }
        this.observableQuery = oq;
        if (oq) {
            oq["queryInfo"] = this;
            this.listeners.add(this.oqListener = function () {
                if (_this.getDiff().fromOptimisticTransaction) {
                    oq["observe"]();
                }
                else {
                    oq.reobserve();
                }
            });
        }
        else {
            delete this.oqListener;
        }
    };
    QueryInfo.prototype.notify = function () {
        var _this = this;
        cancelNotifyTimeout(this);
        if (this.shouldNotify()) {
            this.listeners.forEach(function (listener) { return listener(_this); });
        }
        this.dirty = false;
    };
    QueryInfo.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) {
            return false;
        }
        if (Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_2__["isNetworkRequestInFlight"])(this.networkStatus) &&
            this.observableQuery) {
            var fetchPolicy = this.observableQuery.options.fetchPolicy;
            if (fetchPolicy !== "cache-only" &&
                fetchPolicy !== "cache-and-network") {
                return false;
            }
        }
        return true;
    };
    QueryInfo.prototype.stop = function () {
        if (!this.stopped) {
            this.stopped = true;
            this.cancel();
            delete this.cancel;
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
            var oq = this.observableQuery;
            if (oq)
                oq.stopPolling();
        }
    };
    QueryInfo.prototype.cancel = function () { };
    QueryInfo.prototype.updateWatch = function (variables) {
        var _this = this;
        if (variables === void 0) { variables = this.variables; }
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return;
        }
        if (!this.lastWatch ||
            this.lastWatch.query !== this.document ||
            !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_0__["equal"])(variables, this.lastWatch.variables)) {
            this.cancel();
            this.cancel = this.cache.watch(this.lastWatch = {
                query: this.document,
                variables: variables,
                optimistic: true,
                callback: function (diff) { return _this.setDiff(diff); },
            });
        }
    };
    QueryInfo.prototype.shouldWrite = function (result, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite &&
            lastWrite.dmCount === destructiveMethodCounts.get(this.cache) &&
            Object(_wry_equality__WEBPACK_IMPORTED_MODULE_0__["equal"])(variables, lastWrite.variables) &&
            Object(_wry_equality__WEBPACK_IMPORTED_MODULE_0__["equal"])(result.data, lastWrite.result.data));
    };
    QueryInfo.prototype.markResult = function (result, options, allowCacheWrite) {
        var _this = this;
        this.graphQLErrors = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__["isNonEmptyArray"])(result.errors) ? result.errors : [];
        this.reset();
        if (options.fetchPolicy === 'no-cache') {
            this.diff = { result: result.data, complete: true };
        }
        else if (!this.stopped && allowCacheWrite) {
            if (shouldWriteResult(result, options.errorPolicy)) {
                this.cache.performTransaction(function (cache) {
                    if (_this.shouldWrite(result, options.variables)) {
                        cache.writeQuery({
                            query: _this.document,
                            data: result.data,
                            variables: options.variables,
                        });
                        _this.lastWrite = {
                            result: result,
                            variables: options.variables,
                            dmCount: destructiveMethodCounts.get(_this.cache),
                        };
                    }
                    else {
                        if (_this.diff && _this.diff.complete) {
                            result.data = _this.diff.result;
                            return;
                        }
                    }
                    var diff = cache.diff({
                        query: _this.document,
                        variables: options.variables,
                        returnPartialData: true,
                        optimistic: true,
                    });
                    if (!_this.stopped) {
                        _this.updateWatch(options.variables);
                    }
                    _this.diff = diff;
                    if (diff.complete) {
                        result.data = diff.result;
                    }
                });
            }
            else {
                this.lastWrite = void 0;
            }
        }
    };
    QueryInfo.prototype.markReady = function () {
        this.networkError = null;
        return this.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].ready;
    };
    QueryInfo.prototype.markError = function (error) {
        this.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].error;
        this.lastWrite = void 0;
        this.reset();
        if (error.graphQLErrors) {
            this.graphQLErrors = error.graphQLErrors;
        }
        if (error.networkError) {
            this.networkError = error.networkError;
        }
        return error;
    };
    return QueryInfo;
}());

function shouldWriteResult(result, errorPolicy) {
    if (errorPolicy === void 0) { errorPolicy = "none"; }
    var ignoreErrors = errorPolicy === "ignore" ||
        errorPolicy === "all";
    var writeWithErrors = !Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result);
    if (!writeWithErrors && ignoreErrors && result.data) {
        writeWithErrors = true;
    }
    return writeWithErrors;
}
//# sourceMappingURL=QueryInfo.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/QueryManager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryManager", function() { return QueryManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/errors/index.js");
/* harmony import */ var _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/ObservableQuery.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _LocalState_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/LocalState.js");
/* harmony import */ var _QueryInfo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/QueryInfo.js");










var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = (function () {
    function QueryManager(_a) {
        var cache = _a.cache, link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a.onBroadcast, _c = _a.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.clientAwareness = {};
        this.queries = new Map();
        this.fetchCancelFns = new Map();
        this.transformCache = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["canUseWeakMap"] ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = new Map();
        this.cache = cache;
        this.link = link;
        this.queryDeduplication = queryDeduplication;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new _LocalState_js__WEBPACK_IMPORTED_MODULE_8__["LocalState"]({ cache: cache });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
        if ((this.onBroadcast = onBroadcast)) {
            this.mutationStore = Object.create(null);
        }
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('QueryManager stopped while query was in flight'));
    };
    QueryManager.prototype.cancelPendingFetches = function (error) {
        this.fetchCancelFns.forEach(function (cancel) { return cancel(error); });
        this.fetchCancelFns.clear();
    };
    QueryManager.prototype.mutate = function (_a) {
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueries = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a.update, _d = _a.errorPolicy, errorPolicy = _d === void 0 ? 'none' : _d, fetchPolicy = _a.fetchPolicy, _e = _a.context, context = _e === void 0 ? {} : _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mutationId, mutationStoreValue, self;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
                switch (_f.label) {
                    case 0:
                         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.');
                         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!fetchPolicy || fetchPolicy === 'no-cache', "Mutations only support a 'no-cache' fetchPolicy. If you don't want to disable the cache, remove your fetchPolicy setting to proceed with the default mutation behavior.");
                        mutationId = this.generateMutationId();
                        mutation = this.transform(mutation).document;
                        variables = this.getVariables(mutation, variables);
                        if (!this.transform(mutation).hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = _f.sent();
                        _f.label = 2;
                    case 2:
                        mutationStoreValue = this.mutationStore &&
                            (this.mutationStore[mutationId] = {
                                mutation: mutation,
                                variables: variables,
                                loading: true,
                                error: null,
                            });
                        if (optimisticResponse) {
                            this.markMutationOptimistic(optimisticResponse, {
                                mutationId: mutationId,
                                document: mutation,
                                variables: variables,
                                errorPolicy: errorPolicy,
                                updateQueries: updateQueries,
                                update: updateWithProxyFn,
                            });
                        }
                        this.broadcastQueries();
                        self = this;
                        return [2, new Promise(function (resolve, reject) {
                                var storeResult;
                                var error;
                                self.getObservableFromLink(mutation, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { optimisticResponse: optimisticResponse }), variables, false).subscribe({
                                    next: function (result) {
                                        if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["graphQLResultHasError"])(result) && errorPolicy === 'none') {
                                            error = new _errors_index_js__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({
                                                graphQLErrors: result.errors,
                                            });
                                            return;
                                        }
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = null;
                                        }
                                        if (fetchPolicy !== 'no-cache') {
                                            try {
                                                self.markMutationResult({
                                                    mutationId: mutationId,
                                                    result: result,
                                                    document: mutation,
                                                    variables: variables,
                                                    errorPolicy: errorPolicy,
                                                    updateQueries: updateQueries,
                                                    update: updateWithProxyFn,
                                                });
                                            }
                                            catch (e) {
                                                error = new _errors_index_js__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({
                                                    networkError: e,
                                                });
                                                return;
                                            }
                                        }
                                        storeResult = result;
                                    },
                                    error: function (err) {
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = err;
                                        }
                                        if (optimisticResponse) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        reject(new _errors_index_js__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({
                                            networkError: err,
                                        }));
                                    },
                                    complete: function () {
                                        if (error && mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = error;
                                        }
                                        if (optimisticResponse) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        if (error) {
                                            reject(error);
                                            return;
                                        }
                                        if (typeof refetchQueries === 'function') {
                                            refetchQueries = refetchQueries(storeResult);
                                        }
                                        var refetchQueryPromises = [];
                                        if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(refetchQueries)) {
                                            refetchQueries.forEach(function (refetchQuery) {
                                                if (typeof refetchQuery === 'string') {
                                                    self.queries.forEach(function (_a) {
                                                        var observableQuery = _a.observableQuery;
                                                        if (observableQuery &&
                                                            observableQuery.queryName === refetchQuery) {
                                                            refetchQueryPromises.push(observableQuery.refetch());
                                                        }
                                                    });
                                                }
                                                else {
                                                    var queryOptions = {
                                                        query: refetchQuery.query,
                                                        variables: refetchQuery.variables,
                                                        fetchPolicy: 'network-only',
                                                    };
                                                    if (refetchQuery.context) {
                                                        queryOptions.context = refetchQuery.context;
                                                    }
                                                    refetchQueryPromises.push(self.query(queryOptions));
                                                }
                                            });
                                        }
                                        Promise.all(awaitRefetchQueries ? refetchQueryPromises : []).then(function () {
                                            if (errorPolicy === 'ignore' &&
                                                storeResult &&
                                                Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["graphQLResultHasError"])(storeResult)) {
                                                delete storeResult.errors;
                                            }
                                            resolve(storeResult);
                                        }, reject);
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.markMutationResult = function (mutation, cache) {
        var _this = this;
        if (cache === void 0) { cache = this.cache; }
        if (Object(_QueryInfo_js__WEBPACK_IMPORTED_MODULE_9__["shouldWriteResult"])(mutation.result, mutation.errorPolicy)) {
            var cacheWrites_1 = [{
                    result: mutation.result.data,
                    dataId: 'ROOT_MUTATION',
                    query: mutation.document,
                    variables: mutation.variables,
                }];
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
                this.queries.forEach(function (_a, queryId) {
                    var observableQuery = _a.observableQuery;
                    var queryName = observableQuery && observableQuery.queryName;
                    if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
                        return;
                    }
                    var updater = updateQueries_1[queryName];
                    var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
                    var _c = cache.diff({
                        query: document,
                        variables: variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _c.result, complete = _c.complete;
                    if (complete && currentQueryResult) {
                        var nextQueryResult = updater(currentQueryResult, {
                            mutationResult: mutation.result,
                            queryName: document && Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["getOperationName"])(document) || void 0,
                            queryVariables: variables,
                        });
                        if (nextQueryResult) {
                            cacheWrites_1.push({
                                result: nextQueryResult,
                                dataId: 'ROOT_QUERY',
                                query: document,
                                variables: variables,
                            });
                        }
                    }
                });
            }
            cache.performTransaction(function (c) {
                cacheWrites_1.forEach(function (write) { return c.write(write); });
                var update = mutation.update;
                if (update) {
                    update(c, mutation.result);
                }
            }, null);
        }
    };
    QueryManager.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function"
            ? optimisticResponse(mutation.variables)
            : optimisticResponse;
        return this.cache.recordOptimisticTransaction(function (cache) {
            try {
                _this.markMutationResult(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, mutation), { result: { data: data } }), cache);
            }
            catch (error) {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].error(error);
            }
        }, mutation.mutationId);
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager.prototype.getQueryStore = function () {
        var store = Object.create(null);
        this.queries.forEach(function (info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors,
            };
        });
        return store;
    };
    QueryManager.prototype.resetErrors = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
            queryInfo.networkError = undefined;
            queryInfo.graphQLErrors = [];
        }
    };
    QueryManager.prototype.transform = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var transformed = this.cache.transformDocument(document);
            var forLink = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["removeConnectionDirectiveFromDocument"])(this.cache.transformForLink(transformed));
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = forLink && this.localState.serverQuery(forLink);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["hasClientExports"])(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["getDefaultValues"])(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["getOperationDefinition"])(transformed)),
            };
            var add = function (doc) {
                if (doc && !transformCache.has(doc)) {
                    transformCache.set(doc, cacheEntry_1);
                }
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.transform(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options) {
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { variables: this.getVariables(options.query, options.variables) });
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var queryInfo = new _QueryInfo_js__WEBPACK_IMPORTED_MODULE_9__["QueryInfo"](this.cache);
        var observable = new _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_6__["ObservableQuery"]({
            queryManager: this,
            queryInfo: queryInfo,
            options: options,
        });
        this.queries.set(observable.queryId, queryInfo);
        queryInfo.init({
            document: options.query,
            observableQuery: observable,
            variables: options.variables,
        });
        return observable;
    };
    QueryManager.prototype.query = function (options) {
        var _this = this;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!options.pollInterval, 'pollInterval option only supported on watchQuery.');
        var queryId = this.generateQueryId();
        return this.fetchQuery(queryId, options).finally(function () { return _this.stopQuery(queryId); });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
    };
    QueryManager.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
    };
    QueryManager.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo)
            queryInfo.stop();
    };
    QueryManager.prototype.clearStore = function () {
        this.cancelPendingFetches( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('Store reset while query was in flight (not completed in link chain)'));
        this.queries.forEach(function (queryInfo) {
            if (queryInfo.observableQuery) {
                queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_7__["NetworkStatus"].loading;
            }
            else {
                queryInfo.stop();
            }
        });
        if (this.mutationStore) {
            this.mutationStore = Object.create(null);
        }
        return this.cache.reset();
    };
    QueryManager.prototype.resetStore = function () {
        var _this = this;
        return this.clearStore().then(function () {
            return _this.reFetchObservableQueries();
        });
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.queries.forEach(function (_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (observableQuery && observableQuery.hasObservers()) {
                var fetchPolicy = observableQuery.options.fetchPolicy;
                observableQuery.resetLastResults();
                if (fetchPolicy !== 'cache-only' &&
                    (includeStandby || fetchPolicy !== 'standby')) {
                    observableQueryPromises.push(observableQuery.refetch());
                }
                _this.getQuery(queryId).setDiff(null);
            }
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.setObservableQuery = function (observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager.prototype.startGraphQLSubscription = function (_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, errorPolicy = _a.errorPolicy, variables = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, context, variables, false).map(function (result) {
                if (fetchPolicy !== 'no-cache') {
                    if (Object(_QueryInfo_js__WEBPACK_IMPORTED_MODULE_9__["shouldWriteResult"])(result, errorPolicy)) {
                        _this.cache.write({
                            query: query,
                            result: result.data,
                            dataId: 'ROOT_SUBSCRIPTION',
                            variables: variables,
                        });
                    }
                    _this.broadcastQueries();
                }
                if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["graphQLResultHasError"])(result)) {
                    throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
            return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return sub = observable.subscribe(observer); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        this.fetchCancelFns.delete(queryId);
        this.getQuery(queryId).stop();
        this.queries.delete(queryId);
    };
    QueryManager.prototype.broadcastQueries = function () {
        if (this.onBroadcast)
            this.onBroadcast();
        this.queries.forEach(function (info) { return info.notify(); });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
        var _this = this;
        var _a;
        if (deduplication === void 0) { deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication; }
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["getOperationName"])(serverQuery) || void 0,
                context: this.prepareContext(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { forceFetch: !deduplication })),
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = JSON.stringify(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    var concast = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["Concast"]([
                        Object(_link_core_index_js__WEBPACK_IMPORTED_MODULE_3__["execute"])(link, operation)
                    ]);
                    byVariables_1.set(varJson_1, observable = concast);
                    concast.cleanup(function () {
                        if (byVariables_1.delete(varJson_1) &&
                            byVariables_1.size < 1) {
                            inFlightLinkObservables_1.delete(serverQuery);
                        }
                    });
                }
            }
            else {
                observable = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["Concast"]([
                    Object(_link_core_index_js__WEBPACK_IMPORTED_MODULE_3__["execute"])(link, operation)
                ]);
            }
        }
        else {
            observable = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["Concast"]([
                _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["Observable"].of({ data: {} })
            ]);
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) {
            observable = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["asyncMap"])(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.getResultsFromLink = function (queryInfo, allowCacheWrite, options) {
        var lastRequestId = queryInfo.lastRequestId;
        return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["asyncMap"])(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function (result) {
            var hasErrors = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(result.errors);
            if (lastRequestId >= queryInfo.lastRequestId) {
                if (hasErrors && options.errorPolicy === "none") {
                    throw queryInfo.markError(new _errors_index_js__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({
                        graphQLErrors: result.errors,
                    }));
                }
                queryInfo.markResult(result, options, allowCacheWrite);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: queryInfo.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_7__["NetworkStatus"].ready,
            };
            if (hasErrors && options.errorPolicy !== "ignore") {
                aqr.errors = result.errors;
            }
            return aqr;
        }, function (networkError) {
            var error = Object(_errors_index_js__WEBPACK_IMPORTED_MODULE_5__["isApolloError"])(networkError)
                ? networkError
                : new _errors_index_js__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({ networkError: networkError });
            if (lastRequestId >= queryInfo.lastRequestId) {
                queryInfo.markError(error);
            }
            throw error;
        });
    };
    QueryManager.prototype.fetchQueryObservable = function (queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) { networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_7__["NetworkStatus"].loading; }
        var query = this.transform(options.query).document;
        var variables = this.getVariables(query, options.variables);
        var queryInfo = this.getQuery(queryId);
        var oldNetworkStatus = queryInfo.networkStatus;
        var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var mightUseNetwork = fetchPolicy === "cache-first" ||
            fetchPolicy === "cache-and-network" ||
            fetchPolicy === "network-only" ||
            fetchPolicy === "no-cache";
        if (mightUseNetwork &&
            notifyOnNetworkStatusChange &&
            typeof oldNetworkStatus === "number" &&
            oldNetworkStatus !== networkStatus &&
            Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_7__["isNetworkRequestInFlight"])(networkStatus)) {
            if (fetchPolicy !== "cache-first") {
                fetchPolicy = "cache-and-network";
            }
            returnPartialData = true;
        }
        var normalized = Object.assign({}, options, {
            query: query,
            variables: variables,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            returnPartialData: returnPartialData,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            context: context,
        });
        var fromVariables = function (variables) {
            normalized.variables = variables;
            return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
        };
        this.fetchCancelFns.set(queryId, function (reason) {
            Promise.resolve().then(function () { return concast.cancel(reason); });
        });
        var concast = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["Concast"](this.transform(normalized.query).hasClientExports
            ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables)
            : fromVariables(normalized.variables));
        concast.cleanup(function () {
            _this.fetchCancelFns.delete(queryId);
            var nextFetchPolicy = options.nextFetchPolicy;
            if (nextFetchPolicy) {
                options.nextFetchPolicy = void 0;
                options.fetchPolicy = typeof nextFetchPolicy === "function"
                    ? nextFetchPolicy.call(options, options.fetchPolicy || "cache-first")
                    : nextFetchPolicy;
            }
        });
        return concast;
    };
    QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, options, networkStatus) {
        var _this = this;
        var query = options.query, variables = options.variables, fetchPolicy = options.fetchPolicy, errorPolicy = options.errorPolicy, returnPartialData = options.returnPartialData, context = options.context;
        queryInfo.init({
            document: query,
            variables: variables,
            lastRequestId: this.generateRequestId(),
            networkStatus: networkStatus,
        });
        var readCache = function () { return queryInfo.getDiff(variables); };
        var resultsFromCache = function (diff, networkStatus) {
            if (networkStatus === void 0) { networkStatus = queryInfo.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_7__["NetworkStatus"].loading; }
            var data = diff.result;
            if ( true &&
                Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(diff.missing) &&
                !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(data, {}) &&
                !returnPartialData) {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Missing cache result fields: " + diff.missing.map(function (m) { return m.path.join('.'); }).join(', '), diff.missing);
            }
            var fromData = function (data) { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["Observable"].of(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ data: data, loading: Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_7__["isNetworkRequestInFlight"])(networkStatus), networkStatus: networkStatus }, (diff.complete ? null : { partial: true }))); };
            if (_this.transform(query).hasForcedResolvers) {
                return _this.localState.runResolvers({
                    document: query,
                    remoteResult: { data: data },
                    context: context,
                    variables: variables,
                    onlyRunForcedResolvers: true,
                }).then(function (resolved) { return fromData(resolved.data); });
            }
            return fromData(data);
        };
        var resultsFromLink = function (allowCacheWrite) {
            return _this.getResultsFromLink(queryInfo, allowCacheWrite, {
                variables: variables,
                context: context,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy,
            });
        };
        switch (fetchPolicy) {
            default:
            case "cache-first": {
                var diff = readCache();
                if (diff.complete) {
                    return [
                        resultsFromCache(diff, queryInfo.markReady()),
                    ];
                }
                if (returnPartialData) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(true),
                    ];
                }
                return [
                    resultsFromLink(true),
                ];
            }
            case "cache-and-network": {
                var diff = readCache();
                if (diff.complete || returnPartialData) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(true),
                    ];
                }
                return [
                    resultsFromLink(true),
                ];
            }
            case "cache-only":
                return [
                    resultsFromCache(readCache(), queryInfo.markReady()),
                ];
            case "network-only":
                return [resultsFromLink(true)];
            case "no-cache":
                return [resultsFromLink(false)];
            case "standby":
                return [];
        }
    };
    QueryManager.prototype.getQuery = function (queryId) {
        if (queryId && !this.queries.has(queryId)) {
            this.queries.set(queryId, new _QueryInfo_js__WEBPACK_IMPORTED_MODULE_9__["QueryInfo"](this.cache));
        }
        return this.queries.get(queryId);
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager;
}());

//# sourceMappingURL=QueryManager.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/Reobserver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reobserver", function() { return Reobserver; });
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");



var Reobserver = (function () {
    function Reobserver(observer, options, fetch, shouldFetch) {
        this.observer = observer;
        this.options = options;
        this.fetch = fetch;
        this.shouldFetch = shouldFetch;
    }
    Reobserver.prototype.reobserve = function (newOptions, newNetworkStatus) {
        if (newOptions) {
            this.updateOptions(newOptions);
        }
        else {
            this.updatePolling();
        }
        var concast = this.fetch(this.options, newNetworkStatus);
        if (this.concast) {
            this.concast.removeObserver(this.observer, true);
        }
        concast.addObserver(this.observer);
        return (this.concast = concast).promise;
    };
    Reobserver.prototype.updateOptions = function (newOptions) {
        Object.assign(this.options, Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__["compact"])(newOptions));
        this.updatePolling();
        return this;
    };
    Reobserver.prototype.stop = function () {
        if (this.concast) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
        }
        if (this.pollingInfo) {
            clearTimeout(this.pollingInfo.timeout);
            this.options.pollInterval = 0;
            this.updatePolling();
        }
    };
    Reobserver.prototype.updatePolling = function () {
        var _this = this;
        var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
        if (!pollInterval) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo &&
            pollingInfo.interval === pollInterval) {
            return;
        }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_2__["invariant"])(pollInterval, 'Attempted to start a polling query without a polling interval.');
        if (this.shouldFetch === false) {
            return;
        }
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function () {
            if (_this.pollingInfo) {
                if (_this.shouldFetch && _this.shouldFetch()) {
                    _this.reobserve({
                        fetchPolicy: "network-only",
                        nextFetchPolicy: _this.options.fetchPolicy || "cache-first",
                    }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_0__["NetworkStatus"].poll).then(poll, poll);
                }
                else {
                    poll();
                }
            }
            ;
        };
        var poll = function () {
            var info = _this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    };
    return Reobserver;
}());

//# sourceMappingURL=Reobserver.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCaches", function() { return resetCaches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableFragmentWarnings", function() { return disableFragmentWarnings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableExperimentalFragmentVariables", function() { return enableExperimentalFragmentVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableExperimentalFragmentVariables", function() { return disableExperimentalFragmentVariables; });
/* harmony import */ var _ApolloClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/ApolloClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return _ApolloClient_js__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return _ApolloClient_js__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"]; });

/* harmony import */ var _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/ObservableQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_1__["ObservableQuery"]; });

/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/networkStatus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/types.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_js__WEBPACK_IMPORTED_MODULE_3__) if(["default","ApolloClient","mergeOptions","ObservableQuery","NetworkStatus","isApolloError","ApolloError","Cache","ApolloCache","InMemoryCache","MissingFieldError","defaultDataIdFromObject","makeVar","fromError","toPromise","fromPromise","throwServerError","Observable","isReference","makeReference","setLogVerbosity","resetCaches","disableFragmentWarnings","enableExperimentalFragmentVariables","disableExperimentalFragmentVariables","gql"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/errors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return _errors_index_js__WEBPACK_IMPORTED_MODULE_4__["isApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return _errors_index_js__WEBPACK_IMPORTED_MODULE_4__["ApolloError"]; });

/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return _cache_index_js__WEBPACK_IMPORTED_MODULE_5__["Cache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return _cache_index_js__WEBPACK_IMPORTED_MODULE_5__["ApolloCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return _cache_index_js__WEBPACK_IMPORTED_MODULE_5__["InMemoryCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingFieldError", function() { return _cache_index_js__WEBPACK_IMPORTED_MODULE_5__["MissingFieldError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return _cache_index_js__WEBPACK_IMPORTED_MODULE_5__["defaultDataIdFromObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeVar", function() { return _cache_index_js__WEBPACK_IMPORTED_MODULE_5__["makeVar"]; });

/* harmony import */ var _cache_inmemory_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/cache/inmemory/types.js");
/* harmony import */ var _cache_inmemory_types_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_cache_inmemory_types_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cache_inmemory_types_js__WEBPACK_IMPORTED_MODULE_6__) if(["default","ApolloClient","mergeOptions","ObservableQuery","NetworkStatus","isApolloError","ApolloError","Cache","ApolloCache","InMemoryCache","MissingFieldError","defaultDataIdFromObject","makeVar","fromError","toPromise","fromPromise","throwServerError","Observable","isReference","makeReference","setLogVerbosity","resetCaches","disableFragmentWarnings","enableExperimentalFragmentVariables","disableExperimentalFragmentVariables","gql"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cache_inmemory_types_js__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/index.js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _link_core_index_js__WEBPACK_IMPORTED_MODULE_7__) if(["default","ApolloClient","mergeOptions","ObservableQuery","NetworkStatus","isApolloError","ApolloError","Cache","ApolloCache","InMemoryCache","MissingFieldError","defaultDataIdFromObject","makeVar","fromError","toPromise","fromPromise","throwServerError","Observable","isReference","makeReference","setLogVerbosity","resetCaches","disableFragmentWarnings","enableExperimentalFragmentVariables","disableExperimentalFragmentVariables","gql"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _link_core_index_js__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__["parseAndCheckHttpResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__["serializeFetchParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__["fallbackHttpConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__["selectHttpOptionsAndBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__["checkFetcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__["createSignalIfSupported"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__["selectURI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__["createHttpLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__["HttpLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewriteURIForGET", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__["rewriteURIForGET"]; });

/* harmony import */ var _link_utils_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return _link_utils_index_js__WEBPACK_IMPORTED_MODULE_9__["fromError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return _link_utils_index_js__WEBPACK_IMPORTED_MODULE_9__["toPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return _link_utils_index_js__WEBPACK_IMPORTED_MODULE_9__["fromPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return _link_utils_index_js__WEBPACK_IMPORTED_MODULE_9__["throwServerError"]; });

/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__["isReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__["makeReference"]; });

/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLogVerbosity", function() { return ts_invariant__WEBPACK_IMPORTED_MODULE_11__["setVerbosity"]; });

/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/graphql-tag/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return graphql_tag__WEBPACK_IMPORTED_MODULE_12__["default"]; });














Object(ts_invariant__WEBPACK_IMPORTED_MODULE_11__["setVerbosity"])("log");

var resetCaches = graphql_tag__WEBPACK_IMPORTED_MODULE_12__["default"].resetCaches, disableFragmentWarnings = graphql_tag__WEBPACK_IMPORTED_MODULE_12__["default"].disableFragmentWarnings, enableExperimentalFragmentVariables = graphql_tag__WEBPACK_IMPORTED_MODULE_12__["default"].enableExperimentalFragmentVariables, disableExperimentalFragmentVariables = graphql_tag__WEBPACK_IMPORTED_MODULE_12__["default"].disableExperimentalFragmentVariables;

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/networkStatus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return NetworkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNetworkRequestInFlight", function() { return isNetworkRequestInFlight; });
var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}
//# sourceMappingURL=networkStatus.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/types.js":
/***/ (function(module, exports) {

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/errors/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return isApolloError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return ApolloError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");


function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__["isNonEmptyArray"])(err.graphQLErrors)) {
        err.graphQLErrors.forEach(function (graphQLError) {
            var errorMessage = graphQLError
                ? graphQLError.message
                : 'Error message not found.';
            message += errorMessage + "\n";
        });
    }
    if (err.networkError) {
        message += err.networkError.message + "\n";
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/ApolloLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return ApolloLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/index.js");




function passthrough(op, forward) {
    return (forward ? forward(op) : _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of());
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
    return link.request.length <= 1;
}
var LinkError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.empty = function () {
        return new ApolloLink(function () { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(); });
    };
    ApolloLink.from = function (links) {
        if (links.length === 0)
            return ApolloLink.empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    ApolloLink.split = function (test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            return new ApolloLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of()
                    : rightLink.request(operation) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of()
                    : rightLink.request(operation, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
            });
        }
    };
    ApolloLink.execute = function (link, operation) {
        return (link.request(Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_3__["createOperation"])(operation.context, Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_3__["transformOperation"])(Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_3__["validateOperation"])(operation)))) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of());
    };
    ApolloLink.concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
             false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
            return new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(); }) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
                }) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of());
            });
        }
    };
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return ApolloLink.concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('request is not implemented');
    };
    ApolloLink.prototype.onError = function (error, observer) {
        if (observer && observer.error) {
            observer.error(error);
            return false;
        }
        throw error;
    };
    ApolloLink.prototype.setOnError = function (fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink;
}());

//# sourceMappingURL=ApolloLink.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/ApolloLink.js");

var concat = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/empty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/ApolloLink.js");

var empty = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].empty;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/execute.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/ApolloLink.js");

var execute = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].execute;
//# sourceMappingURL=execute.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/from.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/ApolloLink.js");

var from = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].from;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _empty_js__WEBPACK_IMPORTED_MODULE_0__["empty"]; });

/* harmony import */ var _from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _from_js__WEBPACK_IMPORTED_MODULE_1__["from"]; });

/* harmony import */ var _split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/split.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return _split_js__WEBPACK_IMPORTED_MODULE_2__["split"]; });

/* harmony import */ var _concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _concat_js__WEBPACK_IMPORTED_MODULE_3__["concat"]; });

/* harmony import */ var _execute_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/execute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _execute_js__WEBPACK_IMPORTED_MODULE_4__["execute"]; });

/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return _ApolloLink_js__WEBPACK_IMPORTED_MODULE_5__["ApolloLink"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/types.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_types_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_js__WEBPACK_IMPORTED_MODULE_6__) if(["default","empty","from","split","concat","execute","ApolloLink"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types_js__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/split.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/ApolloLink.js");

var split = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].split;
//# sourceMappingURL=split.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/types.js":
/***/ (function(module, exports) {

;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/HttpLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return HttpLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _createHttpLink_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/createHttpLink.js");



var HttpLink = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpLink, _super);
    function HttpLink(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, Object(_createHttpLink_js__WEBPACK_IMPORTED_MODULE_2__["createHttpLink"])(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink;
}(_core_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]));

//# sourceMappingURL=HttpLink.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/checkFetcher.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return checkFetcher; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");

var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ");
    }
};
//# sourceMappingURL=checkFetcher.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/createHttpLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return createHttpLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/serializeFetchParameter.js");
/* harmony import */ var _selectURI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/selectURI.js");
/* harmony import */ var _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js");
/* harmony import */ var _checkFetcher_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/checkFetcher.js");
/* harmony import */ var _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js");
/* harmony import */ var _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/createSignalIfSupported.js");
/* harmony import */ var _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/rewriteURIForGET.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/index.js");












var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, fetcher = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _b = linkOptions.includeUnusedVariables, includeUnusedVariables = _b === void 0 ? false : _b, requestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
    Object(_checkFetcher_js__WEBPACK_IMPORTED_MODULE_7__["checkFetcher"])(fetcher);
    if (!fetcher) {
        fetcher = fetch;
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new _core_index_js__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"](function (operation) {
        var chosenURI = Object(_selectURI_js__WEBPACK_IMPORTED_MODULE_5__["selectURI"])(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders['apollographql-client-name'] = name_1;
            }
            if (version) {
                clientAwarenessHeaders['apollographql-client-version'] = version;
            }
        }
        var contextHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        var _b = Object(_selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_8__["selectHttpOptionsAndBody"])(operation, _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_8__["fallbackHttpConfig"], linkConfig, contextConfig), options = _b.options, body = _b.body;
        if (body.variables && !includeUnusedVariables) {
            var unusedNames_1 = new Set(Object.keys(body.variables));
            Object(graphql__WEBPACK_IMPORTED_MODULE_1__["visit"])(operation.query, {
                Variable: function (node, _key, parent) {
                    if (parent && parent.kind !== 'VariableDefinition') {
                        unusedNames_1.delete(node.name.value);
                    }
                },
            });
            if (unusedNames_1.size) {
                body.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, body.variables);
                unusedNames_1.forEach(function (name) {
                    delete body.variables[name];
                });
            }
        }
        var controller;
        if (!options.signal) {
            var _c = Object(_createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_9__["createSignalIfSupported"])(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller)
                options.signal = signal;
        }
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if (options.method === 'GET') {
            var _d = Object(_rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_10__["rewriteURIForGET"])(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) {
                return Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_11__["fromError"])(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = Object(_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_4__["serializeFetchParameter"])(body, 'Payload');
            }
            catch (parseError) {
                return Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_11__["fromError"])(parseError);
            }
        }
        return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            fetcher(chosenURI, options)
                .then(function (response) {
                operation.setContext({ response: response });
                return response;
            })
                .then(Object(_parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_6__["parseAndCheckHttpResponse"])(operation))
                .then(function (result) {
                observer.next(result);
                observer.complete();
                return result;
            })
                .catch(function (err) {
                if (err.name === 'AbortError')
                    return;
                if (err.result && err.result.errors && err.result.data) {
                    observer.next(err.result);
                }
                observer.error(err);
            });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};
//# sourceMappingURL=createHttpLink.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/createSignalIfSupported.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return createSignalIfSupported; });
var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};
//# sourceMappingURL=createSignalIfSupported.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_0__["parseAndCheckHttpResponse"]; });

/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/serializeFetchParameter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_1__["serializeFetchParameter"]; });

/* harmony import */ var _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_2__["fallbackHttpConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_2__["selectHttpOptionsAndBody"]; });

/* harmony import */ var _checkFetcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/checkFetcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return _checkFetcher_js__WEBPACK_IMPORTED_MODULE_3__["checkFetcher"]; });

/* harmony import */ var _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/createSignalIfSupported.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_4__["createSignalIfSupported"]; });

/* harmony import */ var _selectURI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/selectURI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return _selectURI_js__WEBPACK_IMPORTED_MODULE_5__["selectURI"]; });

/* harmony import */ var _createHttpLink_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/createHttpLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return _createHttpLink_js__WEBPACK_IMPORTED_MODULE_6__["createHttpLink"]; });

/* harmony import */ var _HttpLink_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/HttpLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return _HttpLink_js__WEBPACK_IMPORTED_MODULE_7__["HttpLink"]; });

/* harmony import */ var _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/rewriteURIForGET.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewriteURIForGET", function() { return _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_8__["rewriteURIForGET"]; });










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return parseAndCheckHttpResponse; });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/index.js");

var hasOwnProperty = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
    return function (response) { return response
        .text()
        .then(function (bodyText) {
        try {
            return JSON.parse(bodyText);
        }
        catch (err) {
            var parseError = err;
            parseError.name = 'ServerParseError';
            parseError.response = response;
            parseError.statusCode = response.status;
            parseError.bodyText = bodyText;
            throw parseError;
        }
    })
        .then(function (result) {
        if (response.status >= 300) {
            Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__["throwServerError"])(response, result, "Response not successful: Received status code " + response.status);
        }
        if (!Array.isArray(result) &&
            !hasOwnProperty.call(result, 'data') &&
            !hasOwnProperty.call(result, 'errors')) {
            Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__["throwServerError"])(response, result, "Server response was missing for query '" + (Array.isArray(operations)
                ? operations.map(function (op) { return op.operationName; })
                : operations.operationName) + "'.");
        }
        return result;
    }); };
}
//# sourceMappingURL=parseAndCheckHttpResponse.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/rewriteURIForGET.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewriteURIForGET", function() { return rewriteURIForGET; });
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/serializeFetchParameter.js");

function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push(key + "=" + encodeURIComponent(value));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = Object(_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__["serializeFetchParameter"])(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = Object(_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__["serializeFetchParameter"])(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}
//# sourceMappingURL=rewriteURIForGET.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return fallbackHttpConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return selectHttpOptionsAndBody; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);


var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var selectHttpOptionsAndBody = function (operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fallbackConfig.options), { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
    var http = fallbackConfig.http || {};
    configs.forEach(function (config) {
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), config.options), { headers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.headers), config.headers) });
        if (config.credentials)
            options.credentials = config.credentials;
        http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, http), config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = Object(graphql__WEBPACK_IMPORTED_MODULE_1__["print"])(query);
    return {
        options: options,
        body: body,
    };
};
//# sourceMappingURL=selectHttpOptionsAndBody.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/selectURI.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return selectURI; });
var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};
//# sourceMappingURL=selectURI.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/serializeFetchParameter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return serializeFetchParameter; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");

var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError =  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("Network request failed. " + label + " is not serializable: " + e.message);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};
//# sourceMappingURL=serializeFetchParameter.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/createOperation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return createOperation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");

function createOperation(starting, operation) {
    var context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), next(context));
        }
        else {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), next);
        }
    };
    var getContext = function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    return operation;
}
//# sourceMappingURL=createOperation.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/fromError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return fromError; });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");

function fromError(errorValue) {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        observer.error(errorValue);
    });
}
//# sourceMappingURL=fromError.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/fromPromise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");

function fromPromise(promise) {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fromError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/fromError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return _fromError_js__WEBPACK_IMPORTED_MODULE_0__["fromError"]; });

/* harmony import */ var _toPromise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/toPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return _toPromise_js__WEBPACK_IMPORTED_MODULE_1__["toPromise"]; });

/* harmony import */ var _fromPromise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/fromPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return _fromPromise_js__WEBPACK_IMPORTED_MODULE_2__["fromPromise"]; });

/* harmony import */ var _throwServerError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/throwServerError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return _throwServerError_js__WEBPACK_IMPORTED_MODULE_3__["throwServerError"]; });

/* harmony import */ var _validateOperation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/validateOperation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateOperation", function() { return _validateOperation_js__WEBPACK_IMPORTED_MODULE_4__["validateOperation"]; });

/* harmony import */ var _createOperation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/createOperation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return _createOperation_js__WEBPACK_IMPORTED_MODULE_5__["createOperation"]; });

/* harmony import */ var _transformOperation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/transformOperation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformOperation", function() { return _transformOperation_js__WEBPACK_IMPORTED_MODULE_6__["transformOperation"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/throwServerError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return throwServerError; });
var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
//# sourceMappingURL=throwServerError.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/toPromise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");

function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"].warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/transformOperation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformOperation", function() { return transformOperation; });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js");

function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["getOperationName"])(transformedOperation.query) || undefined
                : '';
    }
    return transformedOperation;
}
//# sourceMappingURL=transformOperation.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/utils/validateOperation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateOperation", function() { return validateOperation; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");

function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("illegal argument: " + key);
        }
    }
    return operation;
}
//# sourceMappingURL=validateOperation.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/arrays.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyArray", function() { return isNonEmptyArray; });
function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}
//# sourceMappingURL=arrays.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/canUse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseWeakMap", function() { return canUseWeakMap; });
var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' &&
    navigator.product === 'ReactNative');
//# sourceMappingURL=canUse.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/cloneDeep.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return cloneDeep; });
var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}
//# sourceMappingURL=cloneDeep.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/compact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return compact; });
function compact() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objects.forEach(function (obj) {
        if (!obj)
            return;
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (value !== void 0) {
                result[key] = value;
            }
        });
    });
    return result;
}
//# sourceMappingURL=compact.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/environment.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return getEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnv", function() { return isEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevelopment", function() { return isDevelopment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTest", function() { return isTest; });
function getEnv() {
    if (typeof process !== 'undefined' && "development") {
        return "development";
    }
    return 'development';
}
function isEnv(env) {
    return getEnv() === env;
}
function isDevelopment() {
    return isEnv('development') === true;
}
function isTest() {
    return isEnv('test') === true;
}
//# sourceMappingURL=environment.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../../../../usr/local/data/service/node_modules/process/browser.js")))

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/errorHandling.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return graphQLResultHasError; });
function graphQLResultHasError(result) {
    return (result.errors && result.errors.length > 0) || false;
}
//# sourceMappingURL=errorHandling.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/filterInPlace.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterInPlace", function() { return filterInPlace; });
function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function (elem, i) {
        if (test.call(this, elem, i, array)) {
            array[target++] = elem;
        }
    }, context);
    array.length = target;
    return array;
}
//# sourceMappingURL=filterInPlace.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return maybeDeepFreeze; });
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/environment.js");

function isObject(value) {
    return value !== null && typeof value === "object";
}
function deepFreeze(value) {
    var workSet = new Set([value]);
    workSet.forEach(function (obj) {
        if (isObject(obj)) {
            if (!Object.isFrozen(obj))
                Object.freeze(obj);
            Object.getOwnPropertyNames(obj).forEach(function (name) {
                if (isObject(obj[name]))
                    workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function maybeDeepFreeze(obj) {
    if ( true && (Object(_environment_js__WEBPACK_IMPORTED_MODULE_0__["isDevelopment"])() || Object(_environment_js__WEBPACK_IMPORTED_MODULE_0__["isTest"])())) {
        deepFreeze(obj);
    }
    return obj;
}
//# sourceMappingURL=maybeDeepFreeze.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/mergeDeep.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepArray", function() { return mergeDeepArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepMerger", function() { return DeepMerger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");

var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for (var i = 1; i < count; ++i) {
            target = merger.merge(target, sources[i]);
        }
    }
    return target;
}
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = isObject;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if (isObject(source) && isObject(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([target, source, sourceKey], context));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if (isObject(value) && !this.pastCopies.has(value)) {
            if (Array.isArray(value)) {
                value = value.slice(0);
            }
            else {
                value = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ __proto__: Object.getPrototypeOf(value) }, value);
            }
            this.pastCopies.add(value);
        }
        return value;
    };
    return DeepMerger;
}());

//# sourceMappingURL=mergeDeep.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/directives.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return shouldInclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return getDirectiveNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return hasDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClientExports", function() { return hasClientExports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInclusionDirectives", function() { return getInclusionDirectives; });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");


function shouldInclude(_a, variables) {
    var directives = _a.directives;
    if (!directives || !directives.length) {
        return true;
    }
    return getInclusionDirectives(directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables && variables[ifArgument.value.name.value];
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.");
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root) {
    var names = [];
    Object(graphql__WEBPACK_IMPORTED_MODULE_0__["visit"])(root, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
function hasDirectives(names, root) {
    return getDirectiveNames(root).some(function (name) { return names.indexOf(name) > -1; });
}
function hasClientExports(document) {
    return (document &&
        hasDirectives(['client'], document) &&
        hasDirectives(['export'], document));
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) {
        directives.forEach(function (directive) {
            if (!isInclusionDirective(directive))
                return;
            var directiveArguments = directive.arguments;
            var directiveName = directive.name.value;
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.");
            var ifArgument = directiveArguments[0];
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.");
            var ifValue = ifArgument.value;
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
            result.push({ directive: directive, ifArgument: ifArgument });
        });
    }
    return result;
}
//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/fragments.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return getFragmentQueryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return createFragmentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentFromSelection", function() { return getFragmentFromSelection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");


function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
        actualFragmentName = fragments[0].name.value;
    }
    var query = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, document), { definitions: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions) });
    return query;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch (selection.kind) {
        case 'InlineFragment':
            return selection;
        case 'FragmentSpread': {
            var fragment = fragmentMap && fragmentMap[selection.name.value];
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragment, "No fragment named " + selection.name.value + ".");
            return fragment;
        }
        default:
            return null;
    }
}
//# sourceMappingURL=fragments.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/getFromAST.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return checkDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return getOperationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return getOperationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return getFragmentDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return getQueryDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return getFragmentDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return getMainDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return getDefaultValues; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/storeUtils.js");


function checkDocument(doc) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
        }
        return definition;
    });
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations");
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(queryDef && queryDef.operation === 'query', 'Must contain a query definition.');
    return queryDef;
}
function getFragmentDefinition(doc) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(doc.definitions.length <= 1, 'Fragment must have exactly one definition.');
    var fragmentDef = doc.definitions[0];
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.');
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}
function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
        defs.forEach(function (def) {
            if (def.defaultValue) {
                Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["valueToObjectRepresentation"])(defaultValues, def.variable.name, def.defaultValue);
            }
        });
    }
    return defaultValues;
}
//# sourceMappingURL=getFromAST.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/storeUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return makeReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return isReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return valueToObjectRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return storeKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return getStoreKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return argumentsObjectFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return resultKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypenameFromResult", function() { return getTypenameFromResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return isField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return isInlineFragment; });
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/fast-json-stable-stringify/index.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/fragments.js");



function makeReference(id) {
    return { __ref: String(id) };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.');
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
function getStoreKeyName(fieldName, args, directives) {
    if (args &&
        directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = args[key];
            });
            return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default()(args);
        completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
            }
            else {
                completeFieldName += "@" + key;
            }
        });
    }
    return completeFieldName;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    if (typeof result.__typename === 'string') {
        return result.__typename;
    }
    for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
        var selection = _a[_i];
        if (isField(selection)) {
            if (selection.name.value === '__typename') {
                return result[resultKeyNameFromField(selection)];
            }
        }
        else {
            var typename = getTypenameFromResult(result, Object(_fragments_js__WEBPACK_IMPORTED_MODULE_2__["getFragmentFromSelection"])(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === 'string') {
                return typename;
            }
        }
    }
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
//# sourceMappingURL=storeUtils.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/transform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return removeDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return addTypenameToDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return removeConnectionDirectiveFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeArgumentsFromDocument", function() { return removeArgumentsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFragmentSpreadFromDocument", function() { return removeFragmentSpreadFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQueryFromSelectionSet", function() { return buildQueryFromSelectionSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClientSetsFromDocument", function() { return removeClientSetsFromDocument; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _getFromAST_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/filterInPlace.js");
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/fragments.js");







var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function (selection) {
        return selection.kind === 'FragmentSpread' &&
            isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getOperationDefinition"])(doc) || Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentDefinition"])(doc), Object(_fragments_js__WEBPACK_IMPORTED_MODULE_6__["createFragmentMap"])(Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentDefinitions"])(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            return (dir.name && dir.name === directive.name.value) ||
                (dir.test && dir.test(directive));
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(Object(graphql__WEBPACK_IMPORTED_MODULE_1__["visit"])(doc, {
        Variable: {
            enter: function (node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') {
                    variablesInUse[node.name.value] = true;
                }
            },
        },
        Field: {
            enter: function (node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function (directive) { return directive.remove; });
                    if (shouldRemoveField &&
                        node.directives &&
                        node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) {
                            node.arguments.forEach(function (arg) {
                                if (arg.value.kind === 'Variable') {
                                    variablesToRemove.push({
                                        name: arg.value.name.value,
                                    });
                                }
                            });
                        }
                        if (node.selectionSet) {
                            getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                                fragmentSpreadsToRemove.push({
                                    name: frag.name.value,
                                });
                            });
                        }
                        return null;
                    }
                }
            },
        },
        FragmentSpread: {
            enter: function (node) {
                fragmentSpreadsInUse[node.name.value] = true;
            },
        },
        Directive: {
            enter: function (node) {
                if (getDirectiveMatcher(directives)(node)) {
                    return null;
                }
            },
        },
    }));
    if (modifiedDoc &&
        Object(_common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_4__["filterInPlace"])(variablesToRemove, function (v) { return !!v.name && !variablesInUse[v.name]; }).length) {
        modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc &&
        Object(_common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_4__["filterInPlace"])(fragmentSpreadsToRemove, function (fs) { return !!fs.name && !fragmentSpreadsInUse[fs.name]; })
            .length) {
        modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
}
function addTypenameToDocument(doc) {
    return Object(graphql__WEBPACK_IMPORTED_MODULE_1__["visit"])(Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["checkDocument"])(doc), {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === 'OperationDefinition') {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return (Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__["isField"])(selection) &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                var field = parent;
                if (Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__["isField"])(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === 'export'; })) {
                    return;
                }
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, node), { selections: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(selections, [TYPENAME_FIELD]) });
            },
        },
    });
}
addTypenameToDocument.added = function (field) {
    return field === TYPENAME_FIELD;
};
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_2__["invariant"].warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["checkDocument"])(doc));
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    return (!!selectionSet &&
        selectionSet.selections &&
        selectionSet.selections.some(function (selection) {
            return hasDirectivesInSelection(directives, selection, nestedCheck);
        }));
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    if (!Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__["isField"])(selection)) {
        return true;
    }
    if (!selection.directives) {
        return false;
    }
    return (selection.directives.some(getDirectiveMatcher(directives)) ||
        (nestedCheck &&
            hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck)));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === 'Variable' &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(Object(graphql__WEBPACK_IMPORTED_MODULE_1__["visit"])(doc, {
        OperationDefinition: {
            enter: function (node) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) : [] });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) {
                        node.arguments.forEach(function (arg) {
                            if (argMatcher(arg)) {
                                argMatchCount_1 += 1;
                            }
                        });
                    }
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty(Object(graphql__WEBPACK_IMPORTED_MODULE_1__["visit"])(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function (selection) {
        if ((Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__["isField"])(selection) || Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__["isInlineFragment"])(selection)) &&
            selection.selectionSet) {
            getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) { return allFragments.push(frag); });
        }
        else if (selection.kind === 'FragmentSpread') {
            allFragments.push(selection);
        }
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getMainDefinition"])(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = Object(graphql__WEBPACK_IMPORTED_MODULE_1__["visit"])(document, {
        OperationDefinition: {
            enter: function (node) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, node), { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["checkDocument"])(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    if (modifiedDoc) {
        modifiedDoc = Object(graphql__WEBPACK_IMPORTED_MODULE_1__["visit"])(modifiedDoc, {
            FragmentDefinition: {
                enter: function (node) {
                    if (node.selectionSet) {
                        var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
                            return Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__["isField"])(selection) && selection.name.value === '__typename';
                        });
                        if (isTypenameOnly) {
                            return null;
                        }
                    }
                },
            },
        });
    }
    return modifiedDoc;
}
//# sourceMappingURL=transform.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graphql_directives_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return _graphql_directives_js__WEBPACK_IMPORTED_MODULE_0__["shouldInclude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return _graphql_directives_js__WEBPACK_IMPORTED_MODULE_0__["hasDirectives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasClientExports", function() { return _graphql_directives_js__WEBPACK_IMPORTED_MODULE_0__["hasClientExports"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return _graphql_directives_js__WEBPACK_IMPORTED_MODULE_0__["getDirectiveNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInclusionDirectives", function() { return _graphql_directives_js__WEBPACK_IMPORTED_MODULE_0__["getInclusionDirectives"]; });

/* harmony import */ var _graphql_fragments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return _graphql_fragments_js__WEBPACK_IMPORTED_MODULE_1__["createFragmentMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return _graphql_fragments_js__WEBPACK_IMPORTED_MODULE_1__["getFragmentQueryDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentFromSelection", function() { return _graphql_fragments_js__WEBPACK_IMPORTED_MODULE_1__["getFragmentFromSelection"]; });

/* harmony import */ var _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__["checkDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__["getOperationDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__["getOperationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__["getFragmentDefinitions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__["getQueryDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__["getFragmentDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__["getMainDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__["getDefaultValues"]; });

/* harmony import */ var _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isInlineFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["valueToObjectRepresentation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["storeKeyNameFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["argumentsObjectFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["getStoreKeyName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTypenameFromResult", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["getTypenameFromResult"]; });

/* harmony import */ var _graphql_transform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_4__["addTypenameToDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildQueryFromSelectionSet", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_4__["buildQueryFromSelectionSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_4__["removeDirectivesFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_4__["removeConnectionDirectiveFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeArgumentsFromDocument", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_4__["removeArgumentsFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFragmentSpreadFromDocument", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_4__["removeFragmentSpreadFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClientSetsFromDocument", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_4__["removeClientSetsFromDocument"]; });

/* harmony import */ var _policies_pagination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/policies/pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatPagination", function() { return _policies_pagination_js__WEBPACK_IMPORTED_MODULE_5__["concatPagination"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offsetLimitPagination", function() { return _policies_pagination_js__WEBPACK_IMPORTED_MODULE_5__["offsetLimitPagination"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relayStylePagination", function() { return _policies_pagination_js__WEBPACK_IMPORTED_MODULE_5__["relayStylePagination"]; });

/* harmony import */ var _observables_Observable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/Observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _observables_Observable_js__WEBPACK_IMPORTED_MODULE_6__["Observable"]; });

/* harmony import */ var _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_7__["mergeDeep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeepArray", function() { return _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_7__["mergeDeepArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeepMerger", function() { return _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_7__["DeepMerger"]; });

/* harmony import */ var _common_cloneDeep_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/cloneDeep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return _common_cloneDeep_js__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"]; });

/* harmony import */ var _common_maybeDeepFreeze_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return _common_maybeDeepFreeze_js__WEBPACK_IMPORTED_MODULE_9__["maybeDeepFreeze"]; });

/* harmony import */ var _observables_iteration_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/iteration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterateObserversSafely", function() { return _observables_iteration_js__WEBPACK_IMPORTED_MODULE_10__["iterateObserversSafely"]; });

/* harmony import */ var _observables_asyncMap_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/asyncMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncMap", function() { return _observables_asyncMap_js__WEBPACK_IMPORTED_MODULE_11__["asyncMap"]; });

/* harmony import */ var _observables_Concast_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/Concast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Concast", function() { return _observables_Concast_js__WEBPACK_IMPORTED_MODULE_12__["Concast"]; });

/* harmony import */ var _observables_subclassing_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/subclassing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fixObservableSubclass", function() { return _observables_subclassing_js__WEBPACK_IMPORTED_MODULE_13__["fixObservableSubclass"]; });

/* harmony import */ var _common_arrays_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyArray", function() { return _common_arrays_js__WEBPACK_IMPORTED_MODULE_14__["isNonEmptyArray"]; });

/* harmony import */ var _common_errorHandling_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/errorHandling.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return _common_errorHandling_js__WEBPACK_IMPORTED_MODULE_15__["graphQLResultHasError"]; });

/* harmony import */ var _common_canUse_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canUseWeakMap", function() { return _common_canUse_js__WEBPACK_IMPORTED_MODULE_16__["canUseWeakMap"]; });

/* harmony import */ var _common_compact_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/compact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _common_compact_js__WEBPACK_IMPORTED_MODULE_17__["compact"]; });



















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/Concast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Concast", function() { return Concast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/Observable.js");
/* harmony import */ var _iteration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/iteration.js");
/* harmony import */ var _subclassing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/subclassing.js");




function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
var Concast = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Concast, _super);
    function Concast(sources) {
        var _this = _super.call(this, function (observer) {
            _this.addObserver(observer);
            return function () { return _this.removeObserver(observer); };
        }) || this;
        _this.observers = new Set();
        _this.addCount = 0;
        _this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        _this.handlers = {
            next: function (result) {
                if (_this.sub !== null) {
                    _this.latest = ["next", result];
                    Object(_iteration_js__WEBPACK_IMPORTED_MODULE_2__["iterateObserversSafely"])(_this.observers, "next", result);
                }
            },
            error: function (error) {
                var sub = _this.sub;
                if (sub !== null) {
                    if (sub)
                        Promise.resolve().then(function () { return sub.unsubscribe(); });
                    _this.sub = null;
                    _this.latest = ["error", error];
                    _this.reject(error);
                    Object(_iteration_js__WEBPACK_IMPORTED_MODULE_2__["iterateObserversSafely"])(_this.observers, "error", error);
                }
            },
            complete: function () {
                if (_this.sub !== null) {
                    var value = _this.sources.shift();
                    if (!value) {
                        _this.sub = null;
                        if (_this.latest &&
                            _this.latest[0] === "next") {
                            _this.resolve(_this.latest[1]);
                        }
                        else {
                            _this.resolve();
                        }
                        Object(_iteration_js__WEBPACK_IMPORTED_MODULE_2__["iterateObserversSafely"])(_this.observers, "complete");
                    }
                    else if (isPromiseLike(value)) {
                        value.then(function (obs) { return _this.sub = obs.subscribe(_this.handlers); });
                    }
                    else {
                        _this.sub = value.subscribe(_this.handlers);
                    }
                }
            },
        };
        _this.cancel = function (reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.complete();
        };
        _this.promise.catch(function (_) { });
        if (typeof sources === "function") {
            sources = [new _Observable_js__WEBPACK_IMPORTED_MODULE_1__["Observable"](sources)];
        }
        if (isPromiseLike(sources)) {
            sources.then(function (iterable) { return _this.start(iterable); }, _this.handlers.error);
        }
        else {
            _this.start(sources);
        }
        return _this;
    }
    Concast.prototype.start = function (sources) {
        if (this.sub !== void 0)
            return;
        this.sources = Array.from(sources);
        this.handlers.complete();
    };
    Concast.prototype.deliverLastMessage = function (observer) {
        if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) {
                method.call(observer, this.latest[1]);
            }
            if (this.sub === null &&
                nextOrError === "next" &&
                observer.complete) {
                observer.complete();
            }
        }
    };
    Concast.prototype.addObserver = function (observer) {
        if (!this.observers.has(observer)) {
            this.deliverLastMessage(observer);
            this.observers.add(observer);
            ++this.addCount;
        }
    };
    Concast.prototype.removeObserver = function (observer, quietly) {
        if (this.observers.delete(observer) &&
            --this.addCount < 1 &&
            !quietly) {
            this.handlers.error(new Error("Observable cancelled prematurely"));
        }
    };
    Concast.prototype.cleanup = function (callback) {
        var _this = this;
        var called = false;
        var once = function () {
            if (!called) {
                called = true;
                _this.observers.delete(observer);
                callback();
            }
        };
        var observer = {
            next: once,
            error: once,
            complete: once,
        };
        var count = this.addCount;
        this.addObserver(observer);
        this.addCount = count;
    };
    return Concast;
}(_Observable_js__WEBPACK_IMPORTED_MODULE_1__["Observable"]));

Object(_subclassing_js__WEBPACK_IMPORTED_MODULE_3__["fixObservableSubclass"])(Concast);
//# sourceMappingURL=Concast.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/Observable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/symbol-observable/es/index.js");


zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a.prototype['@@observable'] = function () { return this; };

//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/asyncMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncMap", function() { return asyncMap; });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/Observable.js");

function asyncMap(observable, mapFn, catchFn) {
    return new _Observable_js__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        var promiseQueue = {
            then: function (callback) {
                return new Promise(function (resolve) { return resolve(callback()); });
            },
        };
        function makeCallback(examiner, delegate) {
            if (examiner) {
                return function (arg) {
                    ++activeCallbackCount;
                    var both = function () { return examiner(arg); };
                    promiseQueue = promiseQueue.then(both, both).then(function (result) {
                        --activeCallbackCount;
                        next && next.call(observer, result);
                        if (completed) {
                            handler.complete();
                        }
                    }, function (error) {
                        --activeCallbackCount;
                        throw error;
                    }).catch(function (caught) {
                        error && error.call(observer, caught);
                    });
                };
            }
            else {
                return function (arg) { return delegate && delegate.call(observer, arg); };
            }
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error),
            complete: function () {
                completed = true;
                if (!activeCallbackCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}
//# sourceMappingURL=asyncMap.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/iteration.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateObserversSafely", function() { return iterateObserversSafely; });
function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}
//# sourceMappingURL=iteration.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/subclassing.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixObservableSubclass", function() { return fixObservableSubclass; });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/observables/Observable.js");

function fixObservableSubclass(subclass) {
    function set(key) {
        Object.defineProperty(subclass, key, { value: _Observable_js__WEBPACK_IMPORTED_MODULE_0__["Observable"] });
    }
    if (typeof Symbol === "function" && Symbol.species) {
        set(Symbol.species);
    }
    set("@@species");
    return subclass;
}
//# sourceMappingURL=subclassing.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/policies/pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatPagination", function() { return concatPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsetLimitPagination", function() { return offsetLimitPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relayStylePagination", function() { return relayStylePagination; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/utilities/common/mergeDeep.js");



function concatPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming) {
            return existing ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(existing, incoming) : incoming;
        },
    };
}
function offsetLimitPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming, _a) {
            var args = _a.args;
            var merged = existing ? existing.slice(0) : [];
            if (args) {
                var _b = args.offset, offset = _b === void 0 ? 0 : _b;
                for (var i = 0; i < incoming.length; ++i) {
                    merged[offset + i] = incoming[i];
                }
            }
            else {
                merged.push.apply(merged, incoming);
            }
            return merged;
        },
    };
}
function relayStylePagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        read: function (existing, _a) {
            var canRead = _a.canRead, readField = _a.readField;
            if (!existing)
                return;
            var edges = [];
            var startCursor = "";
            var endCursor = "";
            existing.edges.forEach(function (edge) {
                if (canRead(readField("node", edge))) {
                    edges.push(edge);
                    if (edge.cursor) {
                        startCursor = startCursor || edge.cursor;
                        endCursor = edge.cursor;
                    }
                }
            });
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getExtras(existing)), { edges: edges, pageInfo: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, existing.pageInfo), { startCursor: startCursor,
                    endCursor: endCursor }) });
        },
        merge: function (existing, incoming, _a) {
            if (existing === void 0) { existing = makeEmptyData(); }
            var args = _a.args, isReference = _a.isReference, readField = _a.readField;
            var incomingEdges = incoming.edges ? incoming.edges.map(function (edge) {
                if (isReference(edge = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, edge))) {
                    edge.cursor = readField("cursor", edge);
                }
                return edge;
            }) : [];
            if (incoming.pageInfo) {
                var pageInfo_1 = incoming.pageInfo;
                var startCursor = pageInfo_1.startCursor, endCursor = pageInfo_1.endCursor;
                var firstEdge = incomingEdges[0];
                var lastEdge = incomingEdges[incomingEdges.length - 1];
                if (firstEdge && startCursor) {
                    firstEdge.cursor = startCursor;
                }
                if (lastEdge && endCursor) {
                    lastEdge.cursor = endCursor;
                }
                var firstCursor = firstEdge && firstEdge.cursor;
                if (firstCursor && !startCursor) {
                    incoming = Object(_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(incoming, {
                        pageInfo: {
                            startCursor: firstCursor,
                        },
                    });
                }
                var lastCursor = lastEdge && lastEdge.cursor;
                if (lastCursor && !endCursor) {
                    incoming = Object(_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(incoming, {
                        pageInfo: {
                            endCursor: lastCursor,
                        },
                    });
                }
            }
            var prefix = existing.edges;
            var suffix = [];
            if (args && args.after) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.after; });
                if (index >= 0) {
                    prefix = prefix.slice(0, index + 1);
                }
            }
            else if (args && args.before) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.before; });
                suffix = index < 0 ? prefix : prefix.slice(index);
                prefix = [];
            }
            else if (incoming.edges) {
                prefix = [];
            }
            var edges = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(prefix, incomingEdges, suffix);
            var pageInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, incoming.pageInfo), existing.pageInfo);
            if (incoming.pageInfo) {
                var _b = incoming.pageInfo, hasPreviousPage = _b.hasPreviousPage, hasNextPage = _b.hasNextPage, startCursor = _b.startCursor, endCursor = _b.endCursor, extras = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_b, ["hasPreviousPage", "hasNextPage", "startCursor", "endCursor"]);
                Object.assign(pageInfo, extras);
                if (!prefix.length) {
                    if (void 0 !== hasPreviousPage)
                        pageInfo.hasPreviousPage = hasPreviousPage;
                    if (void 0 !== startCursor)
                        pageInfo.startCursor = startCursor;
                }
                if (!suffix.length) {
                    if (void 0 !== hasNextPage)
                        pageInfo.hasNextPage = hasNextPage;
                    if (void 0 !== endCursor)
                        pageInfo.endCursor = endCursor;
                }
            }
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getExtras(existing)), getExtras(incoming)), { edges: edges,
                pageInfo: pageInfo });
        },
    };
}
var getExtras = function (obj) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(obj, notExtras); };
var notExtras = ["edges", "pageInfo"];
function makeEmptyData() {
    return {
        edges: [],
        pageInfo: {
            hasPreviousPage: false,
            hasNextPage: true,
            startCursor: "",
            endCursor: "",
        },
    };
}
//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
var version = '3.3.12';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/lib/invariant.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return processStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVerbosity", function() { return setVerbosity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ungap_global_this__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@ungap/global-this/esm/index.js");



var global = _ungap_global_this__WEBPACK_IMPORTED_MODULE_1__["default"];
var console = global.console;
var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
var verbosityLevels = ["log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(method) {
    return function () {
        if (verbosityLevels.indexOf(method) >= verbosityLevel) {
            return console[method].apply(console, arguments);
        }
    };
}
(function (invariant) {
    invariant.log = wrapConsoleMethod("log");
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
}
// Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.
var processStub = global.process || { env: {} };
if (!global.process)
    try {
        Object.defineProperty(_ungap_global_this__WEBPACK_IMPORTED_MODULE_1__["default"], "process", {
            value: processStub,
            writable: true,
            enumerable: false,
            configurable: true
        });
    }
    catch (_b) {
        // If this fails, it isn't the end of the world.
    }
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);

//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/ts-invariant/node_modules/tslib/tslib.es6.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/tslib/tslib.es6.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/zen-observable/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/zen-observable/lib/Observable.js").Observable;


/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/zen-observable/lib/Observable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// === Symbol Support ===
var hasSymbols = function () {
  return typeof Symbol === 'function';
};

var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};

var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];
  if (value == null) return undefined;
  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;

  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];

    if (ctor === null) {
      ctor = undefined;
    }
  }

  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;
  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');

      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;

  if (!queue) {
    return;
  }

  subscription._queue = undefined;
  subscription._state = 'ready';

  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';
  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);

    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;

      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;

      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({
      type: type,
      value: value
    });

    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{
      type: type,
      value: value
    }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(observer, subscriber) {
    _classCallCheck(this, Subscription);

    // ASSERT: observer is an object
    // ASSERT: subscriber is callable
    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';
    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  _createClass(Subscription, [{
    key: "unsubscribe",
    value: function unsubscribe() {
      if (this._state !== 'closed') {
        closeSubscription(this);
        cleanupSubscription(this);
      }
    }
  }, {
    key: "closed",
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver =
/*#__PURE__*/
function () {
  function SubscriptionObserver(subscription) {
    _classCallCheck(this, SubscriptionObserver);

    this._subscription = subscription;
  }

  _createClass(SubscriptionObserver, [{
    key: "next",
    value: function next(value) {
      onNotify(this._subscription, 'next', value);
    }
  }, {
    key: "error",
    value: function error(value) {
      onNotify(this._subscription, 'error', value);
    }
  }, {
    key: "complete",
    value: function complete() {
      onNotify(this._subscription, 'complete');
    }
  }, {
    key: "closed",
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable =
/*#__PURE__*/
function () {
  function Observable(subscriber) {
    _classCallCheck(this, Observable);

    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');
    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
    this._subscriber = subscriber;
  }

  _createClass(Observable, [{
    key: "subscribe",
    value: function subscribe(observer) {
      if (typeof observer !== 'object' || observer === null) {
        observer = {
          next: observer,
          error: arguments[1],
          complete: arguments[2]
        };
      }

      return new Subscription(observer, this._subscriber);
    }
  }, {
    key: "forEach",
    value: function forEach(fn) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (typeof fn !== 'function') {
          reject(new TypeError(fn + ' is not a function'));
          return;
        }

        function done() {
          subscription.unsubscribe();
          resolve();
        }

        var subscription = _this.subscribe({
          next: function (value) {
            try {
              fn(value, done);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
      });
    }
  }, {
    key: "map",
    value: function map(fn) {
      var _this2 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      return new C(function (observer) {
        return _this2.subscribe({
          next: function (value) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }

            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: "filter",
    value: function filter(fn) {
      var _this3 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      return new C(function (observer) {
        return _this3.subscribe({
          next: function (value) {
            try {
              if (!fn(value)) return;
            } catch (e) {
              return observer.error(e);
            }

            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: "reduce",
    value: function reduce(fn) {
      var _this4 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      var hasSeed = arguments.length > 1;
      var hasValue = false;
      var seed = arguments[1];
      var acc = seed;
      return new C(function (observer) {
        return _this4.subscribe({
          next: function (value) {
            var first = !hasValue;
            hasValue = true;

            if (!first || hasSeed) {
              try {
                acc = fn(acc, value);
              } catch (e) {
                return observer.error(e);
              }
            } else {
              acc = value;
            }
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
            observer.next(acc);
            observer.complete();
          }
        });
      });
    }
  }, {
    key: "concat",
    value: function concat() {
      var _this5 = this;

      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      var C = getSpecies(this);
      return new C(function (observer) {
        var subscription;
        var index = 0;

        function startNext(next) {
          subscription = next.subscribe({
            next: function (v) {
              observer.next(v);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              if (index === sources.length) {
                subscription = undefined;
                observer.complete();
              } else {
                startNext(C.from(sources[index++]));
              }
            }
          });
        }

        startNext(_this5);
        return function () {
          if (subscription) {
            subscription.unsubscribe();
            subscription = undefined;
          }
        };
      });
    }
  }, {
    key: "flatMap",
    value: function flatMap(fn) {
      var _this6 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      return new C(function (observer) {
        var subscriptions = [];

        var outer = _this6.subscribe({
          next: function (value) {
            if (fn) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
            }

            var inner = C.from(value).subscribe({
              next: function (value) {
                observer.next(value);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                var i = subscriptions.indexOf(inner);
                if (i >= 0) subscriptions.splice(i, 1);
                completeIfDone();
              }
            });
            subscriptions.push(inner);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            completeIfDone();
          }
        });

        function completeIfDone() {
          if (outer.closed && subscriptions.length === 0) observer.complete();
        }

        return function () {
          subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
          outer.unsubscribe();
        };
      });
    }
  }, {
    key: SymbolObservable,
    value: function () {
      return this;
    }
  }], [{
    key: "from",
    value: function from(x) {
      var C = typeof this === 'function' ? this : Observable;
      if (x == null) throw new TypeError(x + ' is not an object');
      var method = getMethod(x, SymbolObservable);

      if (method) {
        var observable = method.call(x);
        if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
        if (isObservable(observable) && observable.constructor === C) return observable;
        return new C(function (observer) {
          return observable.subscribe(observer);
        });
      }

      if (hasSymbol('iterator')) {
        method = getMethod(x, SymbolIterator);

        if (method) {
          return new C(function (observer) {
            enqueue(function () {
              if (observer.closed) return;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _item = _step.value;
                  observer.next(_item);
                  if (observer.closed) return;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              observer.complete();
            });
          });
        }
      }

      if (Array.isArray(x)) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;

            for (var i = 0; i < x.length; ++i) {
              observer.next(x[i]);
              if (observer.closed) return;
            }

            observer.complete();
          });
        });
      }

      throw new TypeError(x + ' is not observable');
    }
  }, {
    key: "of",
    value: function of() {
      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      var C = typeof this === 'function' ? this : Observable;
      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;

          for (var i = 0; i < items.length; ++i) {
            observer.next(items[i]);
            if (observer.closed) return;
          }

          observer.complete();
        });
      });
    }
  }, {
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

exports.Observable = Observable;

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
}

/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/public/ReactNativeFile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/extract-files/public/ReactNativeFile.js");


/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/public/createUploadLink.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/@babel/runtime/helpers/extends.js");

var _require = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/core/index.js"),
  ApolloLink = _require.ApolloLink,
  Observable = _require.Observable;

var _require2 = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/node_modules/@apollo/client/link/http/index.js"),
  createSignalIfSupported = _require2.createSignalIfSupported,
  fallbackHttpConfig = _require2.fallbackHttpConfig,
  parseAndCheckHttpResponse = _require2.parseAndCheckHttpResponse,
  rewriteURIForGET = _require2.rewriteURIForGET,
  selectHttpOptionsAndBody = _require2.selectHttpOptionsAndBody,
  selectURI = _require2.selectURI,
  serializeFetchParameter = _require2.serializeFetchParameter;

var extractFiles = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/extract-files/public/extractFiles.js");

var formDataAppendFile = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/public/formDataAppendFile.js");

var isExtractableFile = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/public/isExtractableFile.js");

module.exports = function createUploadLink(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$uri = _ref.uri,
    fetchUri = _ref$uri === void 0 ? '/graphql' : _ref$uri,
    useGETForQueries = _ref.useGETForQueries,
    _ref$isExtractableFil = _ref.isExtractableFile,
    customIsExtractableFile =
      _ref$isExtractableFil === void 0
        ? isExtractableFile
        : _ref$isExtractableFil,
    CustomFormData = _ref.FormData,
    _ref$formDataAppendFi = _ref.formDataAppendFile,
    customFormDataAppendFile =
      _ref$formDataAppendFi === void 0
        ? formDataAppendFile
        : _ref$formDataAppendFi,
    customFetch = _ref.fetch,
    fetchOptions = _ref.fetchOptions,
    credentials = _ref.credentials,
    headers = _ref.headers,
    includeExtensions = _ref.includeExtensions;

  var linkConfig = {
    http: {
      includeExtensions: includeExtensions,
    },
    options: fetchOptions,
    credentials: credentials,
    headers: headers,
  };
  return new ApolloLink(function (operation) {
    var context = operation.getContext();
    var _context$clientAwaren = context.clientAwareness;
    _context$clientAwaren =
      _context$clientAwaren === void 0 ? {} : _context$clientAwaren;
    var name = _context$clientAwaren.name,
      version = _context$clientAwaren.version,
      headers = context.headers;
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: _extends(
        {},
        name && {
          'apollographql-client-name': name,
        },
        version && {
          'apollographql-client-version': version,
        },
        headers
      ),
    };

    var _selectHttpOptionsAnd = selectHttpOptionsAndBody(
        operation,
        fallbackHttpConfig,
        linkConfig,
        contextConfig
      ),
      options = _selectHttpOptionsAnd.options,
      body = _selectHttpOptionsAnd.body;

    var _extractFiles = extractFiles(body, '', customIsExtractableFile),
      clone = _extractFiles.clone,
      files = _extractFiles.files;

    var uri = selectURI(operation, fetchUri);

    if (files.size) {
      delete options.headers['content-type'];
      var RuntimeFormData = CustomFormData || FormData;
      var form = new RuntimeFormData();
      form.append('operations', serializeFetchParameter(clone, 'Payload'));
      var map = {};
      var i = 0;
      files.forEach(function (paths) {
        map[++i] = paths;
      });
      form.append('map', JSON.stringify(map));
      i = 0;
      files.forEach(function (paths, file) {
        customFormDataAppendFile(form, ++i, file);
      });
      options.body = form;
    } else {
      if (
        useGETForQueries &&
        !operation.query.definitions.some(function (definition) {
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'mutation'
          );
        })
      )
        options.method = 'GET';

      if (options.method === 'GET') {
        var _rewriteURIForGET = rewriteURIForGET(uri, body),
          newURI = _rewriteURIForGET.newURI,
          parseError = _rewriteURIForGET.parseError;

        if (parseError)
          return new Observable(function (observer) {
            observer.error(parseError);
          });
        uri = newURI;
      } else options.body = serializeFetchParameter(clone, 'Payload');
    }

    var _createSignalIfSuppor = createSignalIfSupported(),
      controller = _createSignalIfSuppor.controller;

    if (controller) {
      if (options.signal)
        options.signal.addEventListener('abort', function () {
          controller.abort();
        });
      options.signal = controller.signal;
    }

    var runtimeFetch = customFetch || fetch;
    return new Observable(function (observer) {
      var cleaningUp;
      runtimeFetch(uri, options)
        .then(function (response) {
          operation.setContext({
            response: response,
          });
          return response;
        })
        .then(parseAndCheckHttpResponse(operation))
        .then(function (result) {
          observer.next(result);
          observer.complete();
        })
        .catch(function (error) {
          if (!cleaningUp) {
            if (error.result && error.result.errors && error.result.data)
              observer.next(error.result);
            observer.error(error);
          }
        });
      return function () {
        cleaningUp = true;
        if (controller) controller.abort();
      };
    });
  });
};


/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/public/formDataAppendFile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function formDataAppendFile(formData, fieldName, file) {
  formData.append(fieldName, file, file.name);
};


/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/public/index.mjs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createUploadLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/public/createUploadLink.js");
/* harmony import */ var _createUploadLink_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_createUploadLink_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "createUploadLink", function() { return _createUploadLink_js__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _formDataAppendFile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/public/formDataAppendFile.js");
/* harmony import */ var _formDataAppendFile_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_formDataAppendFile_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "formDataAppendFile", function() { return _formDataAppendFile_js__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _isExtractableFile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/public/isExtractableFile.js");
/* harmony import */ var _isExtractableFile_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_isExtractableFile_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "isExtractableFile", function() { return _isExtractableFile_js__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _ReactNativeFile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/public/ReactNativeFile.js");
/* harmony import */ var _ReactNativeFile_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ReactNativeFile_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ReactNativeFile", function() { return _ReactNativeFile_js__WEBPACK_IMPORTED_MODULE_3___default.a; });






/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/apollo-upload-client/public/isExtractableFile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/extract-files/public/isExtractableFile.js");


/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/extract-files/public/ReactNativeFile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ReactNativeFile(_ref) {
  var uri = _ref.uri,
    name = _ref.name,
    type = _ref.type;
  this.uri = uri;
  this.name = name;
  this.type = type;
};


/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/extract-files/public/extractFiles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaultIsExtractableFile = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/extract-files/public/isExtractableFile.js");

module.exports = function extractFiles(value, path, isExtractableFile) {
  if (path === void 0) {
    path = '';
  }

  if (isExtractableFile === void 0) {
    isExtractableFile = defaultIsExtractableFile;
  }

  var clone;
  var files = new Map();

  function addFile(paths, file) {
    var storedPaths = files.get(file);
    if (storedPaths) storedPaths.push.apply(storedPaths, paths);
    else files.set(file, paths);
  }

  if (isExtractableFile(value)) {
    clone = null;
    addFile([path], value);
  } else {
    var prefix = path ? path + '.' : '';
    if (typeof FileList !== 'undefined' && value instanceof FileList)
      clone = Array.prototype.map.call(value, function (file, i) {
        addFile(['' + prefix + i], file);
        return null;
      });
    else if (Array.isArray(value))
      clone = value.map(function (child, i) {
        var result = extractFiles(child, '' + prefix + i, isExtractableFile);
        result.files.forEach(addFile);
        return result.clone;
      });
    else if (value && value.constructor === Object) {
      clone = {};

      for (var i in value) {
        var result = extractFiles(value[i], '' + prefix + i, isExtractableFile);
        result.files.forEach(addFile);
        clone[i] = result.clone;
      }
    } else clone = value;
  }

  return {
    clone: clone,
    files: files,
  };
};


/***/ }),

/***/ "../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/extract-files/public/isExtractableFile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ReactNativeFile = __webpack_require__("../../../../modules/256731989aae89ebdee2b74d3d8afb7fad4c032522de8dbc0b13471a4055fb65/dev/node_modules/extract-files/public/ReactNativeFile.js");

module.exports = function isExtractableFile(value) {
  return (
    (typeof File !== 'undefined' && value instanceof File) ||
    (typeof Blob !== 'undefined' && value instanceof Blob) ||
    value instanceof ReactNativeFile
  );
};


/***/ })

}]);
//# sourceMappingURL=vendors~IndexApp~apolloClient.js.map