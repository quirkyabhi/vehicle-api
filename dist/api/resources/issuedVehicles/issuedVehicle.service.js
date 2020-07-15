"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  validationSchema: function validationSchema(body) {
    var schema = _joi["default"].object().keys({
      vehicleId: _joi["default"].string().required(),
      userId: _joi["default"].string().required(),
      issueDate: _joi["default"].date().required(),
      returnDate: _joi["default"].date().required(),
      totalRent: _joi["default"].number().required(),
      vehicleType: _joi["default"].string(),
      vehicleNo: _joi["default"].string(),
      vehicleName: _joi["default"].string(),
      userName: _joi["default"].string(),
      userEmail: _joi["default"].string(),
      userPhone: _joi["default"].number(),
      finePerDay: _joi["default"].number(),
      totalFine: _joi["default"].number(),
      securityAmount: _joi["default"].number(),
      rentPerDay: _joi["default"].number()
    });

    var _Joi$validate = _joi["default"].validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return {
        error: error
      };
    }

    return {
      value: value
    };
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2lzc3VlZFZlaGljbGVzL2lzc3VlZFZlaGljbGUuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJ2ZWhpY2xlSWQiLCJzdHJpbmciLCJyZXF1aXJlZCIsInVzZXJJZCIsImlzc3VlRGF0ZSIsImRhdGUiLCJyZXR1cm5EYXRlIiwidG90YWxSZW50IiwibnVtYmVyIiwidmVoaWNsZVR5cGUiLCJ2ZWhpY2xlTm8iLCJ2ZWhpY2xlTmFtZSIsInVzZXJOYW1lIiwidXNlckVtYWlsIiwidXNlclBob25lIiwiZmluZVBlckRheSIsInRvdGFsRmluZSIsInNlY3VyaXR5QW1vdW50IiwicmVudFBlckRheSIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNjO0FBQ1ZBLEVBQUFBLGdCQURVLDRCQUNPQyxJQURQLEVBQ1k7QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxTQUFTLEVBQUVILGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFEa0I7QUFFN0JDLE1BQUFBLE1BQU0sRUFBRU4sZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZxQjtBQUc3QkUsTUFBQUEsU0FBUyxFQUFFUCxnQkFBSVEsSUFBSixHQUFXSCxRQUFYLEVBSGtCO0FBSTdCSSxNQUFBQSxVQUFVLEVBQUVULGdCQUFJUSxJQUFKLEdBQVdILFFBQVgsRUFKaUI7QUFLN0JLLE1BQUFBLFNBQVMsRUFBRVYsZ0JBQUlXLE1BQUosR0FBYU4sUUFBYixFQUxrQjtBQU03Qk8sTUFBQUEsV0FBVyxFQUFDWixnQkFBSUksTUFBSixFQU5pQjtBQU83QlMsTUFBQUEsU0FBUyxFQUFDYixnQkFBSUksTUFBSixFQVBtQjtBQVE3QlUsTUFBQUEsV0FBVyxFQUFDZCxnQkFBSUksTUFBSixFQVJpQjtBQVM3QlcsTUFBQUEsUUFBUSxFQUFFZixnQkFBSUksTUFBSixFQVRtQjtBQVU3QlksTUFBQUEsU0FBUyxFQUFDaEIsZ0JBQUlJLE1BQUosRUFWbUI7QUFXN0JhLE1BQUFBLFNBQVMsRUFBQ2pCLGdCQUFJVyxNQUFKLEVBWG1CO0FBWTdCTyxNQUFBQSxVQUFVLEVBQUNsQixnQkFBSVcsTUFBSixFQVprQjtBQWE3QlEsTUFBQUEsU0FBUyxFQUFDbkIsZ0JBQUlXLE1BQUosRUFibUI7QUFjN0JTLE1BQUFBLGNBQWMsRUFBQ3BCLGdCQUFJVyxNQUFKLEVBZGM7QUFlN0JVLE1BQUFBLFVBQVUsRUFBQ3JCLGdCQUFJVyxNQUFKO0FBZmtCLEtBQWxCLENBQWY7O0FBRGtCLHdCQW9CSVgsZ0JBQUlzQixRQUFKLENBQWF4QixJQUFiLEVBQW1CQyxNQUFuQixDQXBCSjtBQUFBLFFBb0JYd0IsS0FwQlcsaUJBb0JYQSxLQXBCVztBQUFBLFFBb0JKQyxLQXBCSSxpQkFvQkpBLEtBcEJJOztBQXFCbEIsUUFBSUQsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BQW5CLEVBQTJCO0FBQ3ZCLGFBQU87QUFBQ0YsUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQVA7QUFDSDs7QUFDRCxXQUFPO0FBQUNDLE1BQUFBLEtBQUssRUFBTEE7QUFBRCxLQUFQO0FBRUg7QUEzQlMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcbmV4cG9ydCBkZWZhdWx0e1xuICAgIHZhbGlkYXRpb25TY2hlbWEoYm9keSl7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgICAgIHZlaGljbGVJZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICB1c2VySWQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgaXNzdWVEYXRlOiBKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICByZXR1cm5EYXRlOiBKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICB0b3RhbFJlbnQ6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgdmVoaWNsZVR5cGU6Sm9pLnN0cmluZygpLFxuICAgICAgICAgICAgdmVoaWNsZU5vOkpvaS5zdHJpbmcoKSxcbiAgICAgICAgICAgIHZlaGljbGVOYW1lOkpvaS5zdHJpbmcoKSxcbiAgICAgICAgICAgIHVzZXJOYW1lOiBKb2kuc3RyaW5nKCksXG4gICAgICAgICAgICB1c2VyRW1haWw6Sm9pLnN0cmluZygpLFxuICAgICAgICAgICAgdXNlclBob25lOkpvaS5udW1iZXIoKSxcbiAgICAgICAgICAgIGZpbmVQZXJEYXk6Sm9pLm51bWJlcigpLFxuICAgICAgICAgICAgdG90YWxGaW5lOkpvaS5udW1iZXIoKSxcbiAgICAgICAgICAgIHNlY3VyaXR5QW1vdW50OkpvaS5udW1iZXIoKSxcbiAgICAgICAgICAgIHJlbnRQZXJEYXk6Sm9pLm51bWJlcigpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3R7IGVycm9yLCB2YWx1ZX09IEpvaS52YWxpZGF0ZShib2R5LCBzY2hlbWEpO1xuICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge3ZhbHVlfTtcblxuICAgIH1cbn0iXX0=