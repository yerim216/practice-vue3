"use strict";

function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
var p1 = {
  name: "john",
  age: 20
};
({
  name: "susan",
  age: 20
}), _readOnlyError("p1");
console.log(p1);