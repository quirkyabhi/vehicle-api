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
    required: true,
    "default": "Paid"
  },
  createdDate: {
    type: Date,
    required: true,
    "default": Date.now
  }
}, {
  collection: 'payments'
});

var _default = new _mongoose["default"].model('Payment', paymentSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3BheW1lbnRzL3BheW1lbnQubW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJwYXltZW50U2NoZW1hIiwiaXNzdWVJZCIsInJlZiIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVxdWlyZWQiLCJmaW5lIiwiTnVtYmVyIiwidG90YWxSZW50Iiwic3RhdHVzIiwiU3RyaW5nIiwiY3JlYXRlZERhdGUiLCJEYXRlIiwibm93IiwiY29sbGVjdGlvbiIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLHFCQUFTRCxNQUF4QjtBQUNBLElBQU1FLGFBQWEsR0FBRSxJQUFJRixNQUFKLENBQVc7QUFDNUJHLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxHQUFHLEVBQUMsZUFEQztBQUVMQyxJQUFBQSxJQUFJLEVBQUNMLE1BQU0sQ0FBQ00sS0FBUCxDQUFhQyxRQUZiO0FBR0xDLElBQUFBLFFBQVEsRUFBRTtBQUhMLEdBRG1CO0FBTTVCQyxFQUFBQSxJQUFJLEVBQUM7QUFDREosSUFBQUEsSUFBSSxFQUFFSyxNQURMO0FBRURGLElBQUFBLFFBQVEsRUFBRTtBQUZULEdBTnVCO0FBVTVCRyxFQUFBQSxTQUFTLEVBQUM7QUFDTk4sSUFBQUEsSUFBSSxFQUFDSyxNQURDO0FBRU5GLElBQUFBLFFBQVEsRUFBRTtBQUZKLEdBVmtCO0FBYzVCSSxFQUFBQSxNQUFNLEVBQUM7QUFDSFAsSUFBQUEsSUFBSSxFQUFFUSxNQURIO0FBRUhMLElBQUFBLFFBQVEsRUFBRSxJQUZQO0FBR0gsZUFBUTtBQUhMLEdBZHFCO0FBbUI1Qk0sRUFBQUEsV0FBVyxFQUFFO0FBQ1RULElBQUFBLElBQUksRUFBQ1UsSUFESTtBQUVUUCxJQUFBQSxRQUFRLEVBQUUsSUFGRDtBQUdULGVBQVNPLElBQUksQ0FBQ0M7QUFITDtBQW5CZSxDQUFYLEVBd0JuQjtBQUFDQyxFQUFBQSxVQUFVLEVBQUU7QUFBYixDQXhCbUIsQ0FBckI7O2VBeUJlLElBQUloQixxQkFBU2lCLEtBQWIsQ0FBbUIsU0FBbkIsRUFBNkJoQixhQUE3QixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuaW1wb3J0IElzc3VlZFZlaGljbGUgZnJvbSAnLi4vaXNzdWVkVmVoaWNsZXMvaXNzdWVkVmVoaWNsZS5tb2RlbCdcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcbmNvbnN0IHBheW1lbnRTY2hlbWE9IG5ldyBTY2hlbWEoe1xuICAgIGlzc3VlSWQ6IHsgXG4gICAgICAgIHJlZjonSXNzdWVkVmVoaWNsZScsIFxuICAgICAgICB0eXBlOlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlIFxuICAgIH0sXG4gICAgZmluZTp7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRvdGFsUmVudDp7XG4gICAgICAgIHR5cGU6TnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc3RhdHVzOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDpcIlBhaWRcIlxuICAgIH0sXG4gICAgY3JlYXRlZERhdGU6IHtcbiAgICAgICAgdHlwZTpEYXRlLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogRGF0ZS5ub3dcbiAgICB9XG59LHtjb2xsZWN0aW9uOiAncGF5bWVudHMnfSk7XG5leHBvcnQgZGVmYXVsdCBuZXcgbW9uZ29vc2UubW9kZWwoJ1BheW1lbnQnLHBheW1lbnRTY2hlbWEpOyJdfQ==