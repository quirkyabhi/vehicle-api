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
      email: _joi["default"].string().email().required(),
      password: _joi["default"].string().required(),
      // role:Joi.string().required(),
      fname: _joi["default"].string().required(),
      lname: _joi["default"].string().required(),
      phone: _joi["default"].number().required(),
      gender: _joi["default"].string().required(),
      dlNo: _joi["default"].string().required()
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
  },
  validationLoginSchema: function validationLoginSchema(body) {
    var schema = _joi["default"].object().keys({
      email: _joi["default"].string().email().required(),
      password: _joi["default"].string().required() // role=

    });

    var _Joi$validate2 = _joi["default"].validate(body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJmbmFtZSIsImxuYW1lIiwicGhvbmUiLCJudW1iZXIiLCJnZW5kZXIiLCJkbE5vIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsInZhbGlkYXRpb25Mb2dpblNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLEtBQUssRUFBRUgsZ0JBQUlJLE1BQUosR0FBYUQsS0FBYixHQUFxQkUsUUFBckIsRUFEc0I7QUFFN0JDLE1BQUFBLFFBQVEsRUFBRU4sZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZtQjtBQUc3QjtBQUNBRSxNQUFBQSxLQUFLLEVBQUVQLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFKc0I7QUFLN0JHLE1BQUFBLEtBQUssRUFBRVIsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUxzQjtBQU03QkksTUFBQUEsS0FBSyxFQUFFVCxnQkFBSVUsTUFBSixHQUFhTCxRQUFiLEVBTnNCO0FBTzdCTSxNQUFBQSxNQUFNLEVBQUVYLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFQcUI7QUFRN0JPLE1BQUFBLElBQUksRUFBRVosZ0JBQUlJLE1BQUosR0FBYUMsUUFBYjtBQVJ1QixLQUFsQixDQUFmOztBQURrQix3QkFXSUwsZ0JBQUlhLFFBQUosQ0FBYWYsSUFBYixFQUFtQkMsTUFBbkIsQ0FYSjtBQUFBLFFBV1hlLEtBWFcsaUJBV1hBLEtBWFc7QUFBQSxRQVdKQyxLQVhJLGlCQVdKQSxLQVhJOztBQVlsQixRQUFJRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FBbkIsRUFBMkI7QUFDdkIsYUFBTztBQUFDRixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBUDtBQUNIOztBQUNELFdBQU87QUFBQ0MsTUFBQUEsS0FBSyxFQUFMQTtBQUFELEtBQVA7QUFFSCxHQWxCUztBQW1CVkUsRUFBQUEscUJBbkJVLGlDQW1CWW5CLElBbkJaLEVBbUJpQjtBQUN2QixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLEtBQUssRUFBRUgsZ0JBQUlJLE1BQUosR0FBYUQsS0FBYixHQUFxQkUsUUFBckIsRUFEc0I7QUFFN0JDLE1BQUFBLFFBQVEsRUFBRU4sZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZtQixDQUc3Qjs7QUFINkIsS0FBbEIsQ0FBZjs7QUFEdUIseUJBT0RMLGdCQUFJYSxRQUFKLENBQWFmLElBQWIsRUFBbUJDLE1BQW5CLENBUEM7QUFBQSxRQU9oQmUsS0FQZ0Isa0JBT2hCQSxLQVBnQjtBQUFBLFFBT1RDLEtBUFMsa0JBT1RBLEtBUFM7O0FBUXZCLFFBQUlELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxPQUFuQixFQUEyQjtBQUN2QixhQUFPO0FBQUNGLFFBQUFBLEtBQUssRUFBTEE7QUFBRCxPQUFQO0FBQ0g7O0FBQ0QsV0FBTztBQUFDQyxNQUFBQSxLQUFLLEVBQUxBO0FBQUQsS0FBUDtBQUVIO0FBaENTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XG5leHBvcnQgZGVmYXVsdHtcbiAgICB2YWxpZGF0aW9uU2NoZW1hKGJvZHkpe1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgICAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIC8vIHJvbGU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICBmbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICBsbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICBwaG9uZTogSm9pLm51bWJlcigpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICBnZW5kZXI6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgZGxObzogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdHsgZXJyb3IsIHZhbHVlfT0gSm9pLnZhbGlkYXRlKGJvZHksIHNjaGVtYSk7XG4gICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7dmFsdWV9O1xuXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uTG9naW5TY2hlbWEoYm9keSl7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgLy8gcm9sZT1cblxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3R7IGVycm9yLCB2YWx1ZX09IEpvaS52YWxpZGF0ZShib2R5LCBzY2hlbWEpO1xuICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge3ZhbHVlfTtcblxuICAgIH1cbn0iXX0=