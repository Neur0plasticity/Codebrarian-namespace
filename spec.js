"use strict";
exports.__esModule = true;
var main_1 = require("./main");
var alg = main_1.namespace;
var throwE = function () { throw new Error(arguments[0]); };
console.log(alg);
console.log("\n// FUNCTIONAL CONSTRAINTS\n// * namespace is function\n// * 1st arg is populated hash\n// * obj key-value is appropriate interface\n// NAMING CONSTRAINTS\n// * unique entries; no duplicates\n// * overrides or tweaks names of programming language namespace ... possibly just prefixes everything with _$\n// * a-z characters only ... no symbols yet\n");
// FUNCTIONAL CONSTRAINTS
// * namespace is function
// * 1st arg is populated hash
// * obj key-value is appropriate interface
console.log("* namespace is function");
typeof main_1.namespace === "function" || throwE();
console.log("\n// * 1st arg is populated hash\n// * obj key-value is appropriate interface)\n");
alg({
    str: {
        notes: ["fake notes"],
        // constraints: {
        // IO's
        datatype: "string",
        ranges: ["$p.length >= 0"],
        patterns: [],
        // usage
        paramable: true,
        writable: true,
        nullable: false,
        returnable: true,
        cloneable: true,
        dynamictypeable: true
    }
});
console.log("* unique entries; no duplicates; no empty ... js intepretter auto removes duplicates");
try {
    alg({
        "str": {},
        "str": {},
        "str": {},
        "str": {}
    });
    console.log("failed");
}
catch (e) {
    console.log("passed");
}
console.log("// * a-z characters only ... no symbols yet");
try {
    alg({
        "0str": {}
    });
    console.log("failed a-z");
}
catch (e) {
}
