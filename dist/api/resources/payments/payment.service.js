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
      issueId: _joi["default"].string().required(),
      fine: _joi["default"].number().required(),
      totalRent: _joi["default"].number().required(),
      status: _joi["default"].string().required()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3BheW1lbnRzL3BheW1lbnQuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJpc3N1ZUlkIiwic3RyaW5nIiwicmVxdWlyZWQiLCJmaW5lIiwibnVtYmVyIiwidG90YWxSZW50Iiwic3RhdHVzIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLE9BQU8sRUFBRUgsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQURvQjtBQUU3QkMsTUFBQUEsSUFBSSxFQUFFTixnQkFBSU8sTUFBSixHQUFhRixRQUFiLEVBRnVCO0FBRzdCRyxNQUFBQSxTQUFTLEVBQUVSLGdCQUFJTyxNQUFKLEdBQWFGLFFBQWIsRUFIa0I7QUFJN0JJLE1BQUFBLE1BQU0sRUFBRVQsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYjtBQUpxQixLQUFsQixDQUFmOztBQURrQix3QkFRSUwsZ0JBQUlVLFFBQUosQ0FBYVosSUFBYixFQUFtQkMsTUFBbkIsQ0FSSjtBQUFBLFFBUVhZLEtBUlcsaUJBUVhBLEtBUlc7QUFBQSxRQVFKQyxLQVJJLGlCQVFKQSxLQVJJOztBQVNsQixRQUFJRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FBbkIsRUFBMkI7QUFDdkIsYUFBTztBQUFDRixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBUDtBQUNIOztBQUNELFdBQU87QUFBQ0MsTUFBQUEsS0FBSyxFQUFMQTtBQUFELEtBQVA7QUFFSDtBQWZTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XG5leHBvcnQgZGVmYXVsdHtcbiAgICB2YWxpZGF0aW9uU2NoZW1hKGJvZHkpe1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgICAgICBpc3N1ZUlkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIGZpbmU6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgdG90YWxSZW50OiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIHN0YXR1czogSm9pLnN0cmluZygpLnJlcXVpcmVkKClcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3R7IGVycm9yLCB2YWx1ZX09IEpvaS52YWxpZGF0ZShib2R5LCBzY2hlbWEpO1xuICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge3ZhbHVlfTtcblxuICAgIH1cbn0iXX0=