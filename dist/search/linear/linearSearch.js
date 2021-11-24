"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");

function linearSearch(items, item){
    for(let i = 0; i < items.length; i++){
        if(items[i] === item){
            return i
        }
    }
    return common_1.NO_MATCH;
};
exports.default = linearSearch;
//# sourceMappingURL=linearSearch.js.map