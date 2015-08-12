"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (f) {
  return (function (x) {
    return f(function () {
      return x(x).apply(undefined, arguments);
    });
  })(function (x) {
    return f(function () {
      return x(x).apply(undefined, arguments);
    });
  });
};

module.exports = exports["default"];