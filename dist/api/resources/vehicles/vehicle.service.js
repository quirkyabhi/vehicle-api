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
      vehicleName: _joi["default"].string().required(),
      vehicleNo: _joi["default"].string().required(),
      vehicleType: _joi["default"].string().required(),
      registrationNo: _joi["default"].string().required(),
      insuranceNo: _joi["default"].string().required(),
      rentPerDay: _joi["default"].number().required()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3ZlaGljbGVzL3ZlaGljbGUuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJ2ZWhpY2xlTmFtZSIsInN0cmluZyIsInJlcXVpcmVkIiwidmVoaWNsZU5vIiwidmVoaWNsZVR5cGUiLCJyZWdpc3RyYXRpb25ObyIsImluc3VyYW5jZU5vIiwicmVudFBlckRheSIsIm51bWJlciIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNjO0FBQ1ZBLEVBQUFBLGdCQURVLDRCQUNPQyxJQURQLEVBQ1k7QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxXQUFXLEVBQUVILGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFEZ0I7QUFFN0JDLE1BQUFBLFNBQVMsRUFBRU4sZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZrQjtBQUc3QkUsTUFBQUEsV0FBVyxFQUFFUCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBSGdCO0FBSTdCRyxNQUFBQSxjQUFjLEVBQUVSLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFKYTtBQUs3QkksTUFBQUEsV0FBVyxFQUFFVCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBTGdCO0FBTTdCSyxNQUFBQSxVQUFVLEVBQUVWLGdCQUFJVyxNQUFKLEdBQWFOLFFBQWI7QUFOaUIsS0FBbEIsQ0FBZjs7QUFEa0Isd0JBVUlMLGdCQUFJWSxRQUFKLENBQWFkLElBQWIsRUFBbUJDLE1BQW5CLENBVko7QUFBQSxRQVVYYyxLQVZXLGlCQVVYQSxLQVZXO0FBQUEsUUFVSkMsS0FWSSxpQkFVSkEsS0FWSTs7QUFXbEIsUUFBSUQsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BQW5CLEVBQTJCO0FBQ3ZCLGFBQU87QUFBQ0YsUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQVA7QUFDSDs7QUFDRCxXQUFPO0FBQUNDLE1BQUFBLEtBQUssRUFBTEE7QUFBRCxLQUFQO0FBRUg7QUFqQlMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcbmV4cG9ydCBkZWZhdWx0e1xuICAgIHZhbGlkYXRpb25TY2hlbWEoYm9keSl7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgICAgIHZlaGljbGVOYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIHZlaGljbGVObzogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICB2ZWhpY2xlVHlwZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICByZWdpc3RyYXRpb25ObzogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICBpbnN1cmFuY2VObzogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICByZW50UGVyRGF5OiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3R7IGVycm9yLCB2YWx1ZX09IEpvaS52YWxpZGF0ZShib2R5LCBzY2hlbWEpO1xuICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge3ZhbHVlfTtcblxuICAgIH1cbn0iXX0=