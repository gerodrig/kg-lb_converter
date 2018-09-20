"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = kgConverter;
function kgConverter(weight) {
  var KG_LB = 2.20462;
  var LB_KG = 0.453592;
  var lbConverter = function lbConverter(weight) {
    return (weight * LB_KG).toFixed(2);
  };

  return (weight * KG_LB).toFixed(2);
}