"use strict";
// export interface namespaceObj {
exports.__esModule = true;
;
;
var intface = {
    notes: function (val) {
        val.forEach(function (e) {
            typeof e === "string" || (function () { throw new Error(); })();
        });
        return true;
    },
    datatype: function (val) {
        return ['boolean', 'number', 'string', 'array', 'object', 'undefined'].includes(val);
    },
    ranges: function (val) {
        val.forEach(function (e) {
            typeof e === "string" || (function () { throw new Error(); })();
        });
        return true;
    },
    patterns: function (val) {
        val.forEach(function (e) {
            typeof e === "string" || (function () { throw new Error(); })();
        });
        return true;
    },
    // usage
    paramable: function (val) {
        return typeof val === "boolean";
    },
    writable: function (val) {
        return typeof val === "boolean";
    },
    nullable: function (val) {
        return typeof val === "boolean";
    },
    returnable: function (val) {
        return typeof val === "boolean";
    },
    cloneable: function (val) {
        return typeof val === "boolean";
    },
    dynamictypeable: function (val) {
        return typeof val === "boolean";
    }
};
exports.namespace = function codebrarian_namespace(namespaceOBJ) {
    // NAMING CONSTRAINTS
    // * unique entries; no duplicates
    // * overrides or tweaks names of programming language namespace ... possibly just prefixes everything with _$
    // * a-z characters only ... no symbols yet
    if (typeof namespaceOBJ !== "object") {
        throw new Error();
    }
    for (var k in namespaceOBJ) {
        /* a-z characters only ... no symbols yet*/ eval("function x(" + k + ") {}");
        typeof namespaceOBJ[k] === "object" || (function () { throw new Error(); })();
        (Object.keys(namespaceOBJ[k]).length > 0) || (function () { throw new Error(); })();
        for (var j in intface) {
            console.log("j", j);
            console.log("k", k);
            console.log(namespaceOBJ[k]);
            console.log(namespaceOBJ[k][j]);
            intface[j](namespaceOBJ[k][j]);
        }
    }
    return Object.freeze(Object.assign({}, namespaceOBJ));
};
