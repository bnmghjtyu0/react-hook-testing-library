"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function FavoriteNumber({
  min = 1,
  max = 9
}) {
  const [number, setNumber] = _react.default.useState(0);

  const [numberEntered, setNumberEntered] = _react.default.useState(false);

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "favorite-number"
  }, "Favorite Number"), /*#__PURE__*/_react.default.createElement("input", {
    id: "favorite-number",
    type: "number",
    value: number,
    onChange: function (event) {
      setNumber(Number(event.target.value));
      setNumberEntered(true);
    }
  }), !numberEntered || number >= min && number <= max ? null : /*#__PURE__*/_react.default.createElement("div", {
    role: "alert"
  }, "The number is invalid"));
}

var _default = FavoriteNumber;
exports.default = _default;