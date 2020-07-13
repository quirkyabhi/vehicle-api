"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _issuedVehicle = _interopRequireDefault(require("../issuedVehicles/issuedVehicle.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var paymentSchema = new Schema({
  issueId: {
    ref: 'IssuedVehicle',
    type: Schema.Types.ObjectId,
    required: true
  },
  fine: {
    type: Number,
    required: true
  },
  totalRent: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true
  }
}, {
  collection: 'payments'
});

var _default = new _mongoose["default"].model('Payment', paymentSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3BheW1lbnRzL3BheW1lbnQubW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJwYXltZW50U2NoZW1hIiwiaXNzdWVJZCIsInJlZiIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVxdWlyZWQiLCJmaW5lIiwiTnVtYmVyIiwidG90YWxSZW50Iiwic3RhdHVzIiwiU3RyaW5nIiwiY3JlYXRlZERhdGUiLCJEYXRlIiwiY29sbGVjdGlvbiIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLHFCQUFTRCxNQUF4QjtBQUNBLElBQU1FLGFBQWEsR0FBRSxJQUFJRixNQUFKLENBQVc7QUFDNUJHLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxHQUFHLEVBQUMsZUFEQztBQUVMQyxJQUFBQSxJQUFJLEVBQUNMLE1BQU0sQ0FBQ00sS0FBUCxDQUFhQyxRQUZiO0FBR0xDLElBQUFBLFFBQVEsRUFBRTtBQUhMLEdBRG1CO0FBTTVCQyxFQUFBQSxJQUFJLEVBQUM7QUFDREosSUFBQUEsSUFBSSxFQUFFSyxNQURMO0FBRURGLElBQUFBLFFBQVEsRUFBRTtBQUZULEdBTnVCO0FBVTVCRyxFQUFBQSxTQUFTLEVBQUM7QUFDTk4sSUFBQUEsSUFBSSxFQUFDSyxNQURDO0FBRU5GLElBQUFBLFFBQVEsRUFBRTtBQUZKLEdBVmtCO0FBYzVCSSxFQUFBQSxNQUFNLEVBQUM7QUFDSFAsSUFBQUEsSUFBSSxFQUFFUSxNQURIO0FBRUhMLElBQUFBLFFBQVEsRUFBRTtBQUZQLEdBZHFCO0FBa0I1Qk0sRUFBQUEsV0FBVyxFQUFFO0FBQ1RULElBQUFBLElBQUksRUFBQ1UsSUFESTtBQUVUUCxJQUFBQSxRQUFRLEVBQUU7QUFGRDtBQWxCZSxDQUFYLEVBc0JuQjtBQUFDUSxFQUFBQSxVQUFVLEVBQUU7QUFBYixDQXRCbUIsQ0FBckI7O2VBdUJlLElBQUlmLHFCQUFTZ0IsS0FBYixDQUFtQixTQUFuQixFQUE2QmYsYUFBN0IsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcbmltcG9ydCBJc3N1ZWRWZWhpY2xlIGZyb20gJy4uL2lzc3VlZFZlaGljbGVzL2lzc3VlZFZlaGljbGUubW9kZWwnXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5jb25zdCBwYXltZW50U2NoZW1hPSBuZXcgU2NoZW1hKHtcbiAgICBpc3N1ZUlkOiB7IFxuICAgICAgICByZWY6J0lzc3VlZFZlaGljbGUnLCBcbiAgICAgICAgdHlwZTpTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSBcbiAgICB9LFxuICAgIGZpbmU6e1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0b3RhbFJlbnQ6e1xuICAgICAgICB0eXBlOk51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHN0YXR1czp7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNyZWF0ZWREYXRlOiB7XG4gICAgICAgIHR5cGU6RGF0ZSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG59LHtjb2xsZWN0aW9uOiAncGF5bWVudHMnfSk7XG5leHBvcnQgZGVmYXVsdCBuZXcgbW9uZ29vc2UubW9kZWwoJ1BheW1lbnQnLHBheW1lbnRTY2hlbWEpOyJdfQ==