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
      userId: _joi["default"].string().required(),
      fine: _joi["default"].number().required(),
      totalRent: _joi["default"].number().required(),
      createdDate: _joi["default"].date().required()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3BheW1lbnRzL3BheW1lbnQuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJpc3N1ZUlkIiwic3RyaW5nIiwicmVxdWlyZWQiLCJ1c2VySWQiLCJmaW5lIiwibnVtYmVyIiwidG90YWxSZW50IiwiY3JlYXRlZERhdGUiLCJkYXRlIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLE9BQU8sRUFBRUgsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQURvQjtBQUU3QkMsTUFBQUEsTUFBTSxFQUFDTixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRnNCO0FBRzdCRSxNQUFBQSxJQUFJLEVBQUVQLGdCQUFJUSxNQUFKLEdBQWFILFFBQWIsRUFIdUI7QUFJN0JJLE1BQUFBLFNBQVMsRUFBRVQsZ0JBQUlRLE1BQUosR0FBYUgsUUFBYixFQUprQjtBQUs3QkssTUFBQUEsV0FBVyxFQUFDVixnQkFBSVcsSUFBSixHQUFXTixRQUFYO0FBTGlCLEtBQWxCLENBQWY7O0FBRGtCLHdCQVNJTCxnQkFBSVksUUFBSixDQUFhZCxJQUFiLEVBQW1CQyxNQUFuQixDQVRKO0FBQUEsUUFTWGMsS0FUVyxpQkFTWEEsS0FUVztBQUFBLFFBU0pDLEtBVEksaUJBU0pBLEtBVEk7O0FBVWxCLFFBQUlELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxPQUFuQixFQUEyQjtBQUN2QixhQUFPO0FBQUNGLFFBQUFBLEtBQUssRUFBTEE7QUFBRCxPQUFQO0FBQ0g7O0FBQ0QsV0FBTztBQUFDQyxNQUFBQSxLQUFLLEVBQUxBO0FBQUQsS0FBUDtBQUVIO0FBaEJTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XG5leHBvcnQgZGVmYXVsdHtcbiAgICB2YWxpZGF0aW9uU2NoZW1hKGJvZHkpe1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgICAgICBpc3N1ZUlkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIHVzZXJJZDpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIGZpbmU6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgdG90YWxSZW50OiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIGNyZWF0ZWREYXRlOkpvaS5kYXRlKCkucmVxdWlyZWQoKVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdHsgZXJyb3IsIHZhbHVlfT0gSm9pLnZhbGlkYXRlKGJvZHksIHNjaGVtYSk7XG4gICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7dmFsdWV9O1xuXG4gICAgfVxufSJdfQ==