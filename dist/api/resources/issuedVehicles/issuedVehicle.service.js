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
      totalRent: _joi["default"].number().required()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2lzc3VlZFZlaGljbGVzL2lzc3VlZFZlaGljbGUuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJ2ZWhpY2xlSWQiLCJzdHJpbmciLCJyZXF1aXJlZCIsInVzZXJJZCIsImlzc3VlRGF0ZSIsImRhdGUiLCJyZXR1cm5EYXRlIiwidG90YWxSZW50IiwibnVtYmVyIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLFNBQVMsRUFBRUgsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQURrQjtBQUU3QkMsTUFBQUEsTUFBTSxFQUFFTixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRnFCO0FBRzdCRSxNQUFBQSxTQUFTLEVBQUVQLGdCQUFJUSxJQUFKLEdBQVdILFFBQVgsRUFIa0I7QUFJN0JJLE1BQUFBLFVBQVUsRUFBRVQsZ0JBQUlRLElBQUosR0FBV0gsUUFBWCxFQUppQjtBQUs3QkssTUFBQUEsU0FBUyxFQUFFVixnQkFBSVcsTUFBSixHQUFhTixRQUFiO0FBTGtCLEtBQWxCLENBQWY7O0FBRGtCLHdCQVVJTCxnQkFBSVksUUFBSixDQUFhZCxJQUFiLEVBQW1CQyxNQUFuQixDQVZKO0FBQUEsUUFVWGMsS0FWVyxpQkFVWEEsS0FWVztBQUFBLFFBVUpDLEtBVkksaUJBVUpBLEtBVkk7O0FBV2xCLFFBQUlELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxPQUFuQixFQUEyQjtBQUN2QixhQUFPO0FBQUNGLFFBQUFBLEtBQUssRUFBTEE7QUFBRCxPQUFQO0FBQ0g7O0FBQ0QsV0FBTztBQUFDQyxNQUFBQSxLQUFLLEVBQUxBO0FBQUQsS0FBUDtBQUVIO0FBakJTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XG5leHBvcnQgZGVmYXVsdHtcbiAgICB2YWxpZGF0aW9uU2NoZW1hKGJvZHkpe1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgICAgICB2ZWhpY2xlSWQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgdXNlcklkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIGlzc3VlRGF0ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgcmV0dXJuRGF0ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgdG90YWxSZW50OiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdHsgZXJyb3IsIHZhbHVlfT0gSm9pLnZhbGlkYXRlKGJvZHksIHNjaGVtYSk7XG4gICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7dmFsdWV9O1xuXG4gICAgfVxufSJdfQ==