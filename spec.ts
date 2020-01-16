import { namespace } from './main';

const alg = namespace;
const throwE = function(){throw new Error(arguments[0]);}
console.log(alg);

console.log(`
// FUNCTIONAL CONSTRAINTS
// * namespace is function
// * 1st arg is populated hash
// * obj key-value is appropriate interface
// NAMING CONSTRAINTS
// * unique entries; no duplicates
// * overrides or tweaks names of programming language namespace ... possibly just prefixes everything with _$
// * a-z characters only ... no symbols yet
`);

// FUNCTIONAL CONSTRAINTS
// * namespace is function
// * 1st arg is populated hash
// * obj key-value is appropriate interface

console.log(`* namespace is function`);
    typeof namespace === "function" || throwE();

console.log(`
// * 1st arg is populated hash
// * obj key-value is appropriate interface)
`);
    alg({
        str: {
            notes: ["fake notes"],
            // constraints: {
                // IO's
                datatype:       "string",
                ranges:         ["$p.length >= 0"],
                patterns:       [],
                // usage
                paramable:      true,
                writable:       true,
                nullable:       false,
                returnable:     true,
                cloneable:      true,
                dynamictypeable:true,
            // } 
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
    catch(e) {
        console.log("passed");
    }
console.log(`// * a-z characters only ... no symbols yet`);
    try {
        alg({
            "0str": {}
        });
        console.log("failed a-z");
    } catch(e) {

    }