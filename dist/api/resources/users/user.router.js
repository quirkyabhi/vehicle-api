"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;

var _user = _interopRequireDefault(require("./user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var userRouter = express.Router();
exports.userRouter = userRouter;
userRouter.post('/signup', _user["default"].signup);
userRouter.post('/login', _user["default"].login);
userRouter.route('/').post(_user["default"].create).get(_user["default"].findAll);
userRouter.route('/:id').get(_user["default"].findOne)["delete"](_user["default"].detete).put(_user["default"].update);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIucm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwidXNlclJvdXRlciIsIlJvdXRlciIsInBvc3QiLCJ1c2VyQ29udHJvbGxlciIsInNpZ251cCIsImxvZ2luIiwicm91dGUiLCJjcmVhdGUiLCJnZXQiLCJmaW5kQWxsIiwiZmluZE9uZSIsImRldGV0ZSIsInB1dCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBREEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF2Qjs7QUFFTyxJQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csTUFBUixFQUFuQjs7QUFFUEQsVUFBVSxDQUFDRSxJQUFYLENBQWdCLFNBQWhCLEVBQTBCQyxpQkFBZUMsTUFBekM7QUFDQUosVUFBVSxDQUFDRSxJQUFYLENBQWdCLFFBQWhCLEVBQXlCQyxpQkFBZUUsS0FBeEM7QUFFQUwsVUFBVSxDQUFDTSxLQUFYLENBQWlCLEdBQWpCLEVBQ0NKLElBREQsQ0FDTUMsaUJBQWVJLE1BRHJCLEVBRUNDLEdBRkQsQ0FFS0wsaUJBQWVNLE9BRnBCO0FBSUFULFVBQVUsQ0FBQ00sS0FBWCxDQUFpQixNQUFqQixFQUNDRSxHQURELENBQ0tMLGlCQUFlTyxPQURwQixZQUVRUCxpQkFBZVEsTUFGdkIsRUFHQ0MsR0FIRCxDQUdLVCxpQkFBZVUsTUFIcEIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXG5pbXBvcnQgdXNlckNvbnRyb2xsZXIgZnJvbSAnLi91c2VyLmNvbnRyb2xsZXInXG5leHBvcnQgY29uc3QgdXNlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnVzZXJSb3V0ZXIucG9zdCgnL3NpZ251cCcsdXNlckNvbnRyb2xsZXIuc2lnbnVwKVxudXNlclJvdXRlci5wb3N0KCcvbG9naW4nLHVzZXJDb250cm9sbGVyLmxvZ2luKVxuXG51c2VyUm91dGVyLnJvdXRlKCcvJylcbi5wb3N0KHVzZXJDb250cm9sbGVyLmNyZWF0ZSlcbi5nZXQodXNlckNvbnRyb2xsZXIuZmluZEFsbClcblxudXNlclJvdXRlci5yb3V0ZSgnLzppZCcpXG4uZ2V0KHVzZXJDb250cm9sbGVyLmZpbmRPbmUpXG4uZGVsZXRlKHVzZXJDb250cm9sbGVyLmRldGV0ZSlcbi5wdXQodXNlckNvbnRyb2xsZXIudXBkYXRlKSJdfQ==