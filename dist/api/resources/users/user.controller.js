"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user.model"));

var _user2 = _interopRequireDefault(require("./user.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import { response } from 'express';
var _default = {
  findAll: function findAll(req, res) {
    // res.json({msg:"find all users"});
    _user["default"].find().then(function (employee) {
      return res.json(employee);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _user["default"].findById(id).then(function (employee) {
      if (!employee) {
        return res.status(400).json({
          err: "employee not found"
        });
      } else {
        return res.json(employee);
      }
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  detete: function detete(req, res) {
    var id = req.params.id;

    _user["default"].findByIdAndRemove(id).then(function (employee) {
      if (!employee) {
        return res.status(400).json({
          err: "customer not found"
        });
      } else {
        return res.json(employee);
      }
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    _user["default"].findByIdAndUpdate({
      _id: id
    }, {
      $set: req.body
    }, {
      "new": true
    }).then(function (employee) {
      if (!employee) {
        return res.status(400).json({
          err: "employee not found"
        });
      } else {
        return res.json(employee);
      }
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    var _req$body = req.body,
        fname = _req$body.fname,
        lname = _req$body.lname,
        email = _req$body.email,
        phone = _req$body.phone,
        gender = _req$body.gender,
        dlNo = _req$body.dlNo,
        password = _req$body.password,
        createdAt = _req$body.createdAt;

    if (!fname) {
      return res.status(400).json({
        err: "first name is required."
      });
    }

    if (!lname) {
      return res.status(400).json({
        err: "last name is required."
      });
    }

    if (!email) {
      return res.status(400).json({
        err: "email is required."
      });
    }

    if (!phone) {
      return res.status(400).json({
        err: "phone is required."
      });
    }

    if (!gender) {
      return res.status(400).json({
        err: "gender is required."
      });
    }

    if (!dlNo) {
      return res.status(400).json({
        err: "dlno is required."
      });
    }

    if (!password) {
      return res.status(400).json({
        err: "password is required."
      });
    }

    if (!createdAt) {
      return res.status(400).json({
        err: "date is required."
      });
    }
  },
  signup: function signup(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _userService$validati, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _userService$validati = _user2["default"].validationSchema(req.body), error = _userService$validati.error, value = _userService$validati.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error.details));

            case 4:
              _context.next = 6;
              return _user["default"].create(value).then(function (customer) {
                return res.json(customer);
              })["catch"](function (err) {
                return res.status(500).json(err);
              });

            case 6:
              console.log(value);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }))();
  },
  login: function login(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _userService$validati2, error, value, user;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _userService$validati2 = _user2["default"].validationLoginSchema(req.body), error = _userService$validati2.error, value = _userService$validati2.value;

              if (!(error && error.details)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(500).json(error.details));

            case 4:
              _context2.next = 6;
              return _user["default"].findOne({
                email: value.email
              });

            case 6:
              user = _context2.sent;

              if (user) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                err: "Invalid Email"
              }));

            case 11:
              if (!(user.password != value.password)) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                err: "Invalid Password"
              }));

            case 15:
              console.log(value);
              return _context2.abrupt("return", res.json(user));

            case 17:
              _context2.next = 22;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 19]]);
    }))();
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwiVXNlciIsImZpbmQiLCJ0aGVuIiwiZW1wbG95ZWUiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJkZXRldGUiLCJmaW5kQnlJZEFuZFJlbW92ZSIsInVwZGF0ZSIsImZpbmRCeUlkQW5kVXBkYXRlIiwiX2lkIiwiJHNldCIsImJvZHkiLCJjcmVhdGUiLCJmbmFtZSIsImxuYW1lIiwiZW1haWwiLCJwaG9uZSIsImdlbmRlciIsImRsTm8iLCJwYXNzd29yZCIsImNyZWF0ZWRBdCIsInNpZ251cCIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGlvblNjaGVtYSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiY3VzdG9tZXIiLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJ2YWxpZGF0aW9uTG9naW5TY2hlbWEiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0FBQ0E7ZUFDYztBQUNWQSxFQUFBQSxPQURVLG1CQUNGQyxHQURFLEVBQ0VDLEdBREYsRUFDTTtBQUNaO0FBQ0FDLHFCQUFLQyxJQUFMLEdBQVlDLElBQVosQ0FBaUIsVUFBQUMsUUFBUTtBQUFBLGFBQUVKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxRQUFULENBQUY7QUFBQSxLQUF6QixXQUVJLFVBQUFFLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRlA7QUFJSCxHQVBTO0FBUVZFLEVBQUFBLE9BUlUsbUJBUUZULEdBUkUsRUFRRUMsR0FSRixFQVFNO0FBQ1osUUFBTVMsRUFBRSxHQUFHVixHQUFHLENBQUNXLE1BQUosQ0FBV0QsRUFBdEI7O0FBQ0FSLHFC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TmEsS0FGTSwwQkFFTkEsS0FGTSxFQUVDQyxLQUZELDBCQUVDQSxLQUZEOztBQUFBLG9CQUdURCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FITjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFJRmpDLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXNCMEIsS0FBSyxDQUFDRSxPQUE1QixDQUpFOztBQUFBO0FBQUE7QUFBQSxxQkFNTWhDLGlCQUFLTyxPQUFMLENBQWE7QUFBQ2MsZ0JBQUFBLEtBQUssRUFBRVUsS0FBSyxDQUFDVjtBQUFkLGVBQWIsQ0FOTjs7QUFBQTtBQU1QaUIsY0FBQUEsSUFOTzs7QUFBQSxrQkFPVEEsSUFQUztBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFRRnZDLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLGdCQUFBQSxHQUFHLEVBQUM7QUFBTCxlQUFyQixDQVJFOztBQUFBO0FBQUEsb0JBVUxpQyxJQUFJLENBQUNiLFFBQUwsSUFBaUJNLEtBQUssQ0FBQ04sUUFWbEI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBV0YxQixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFDQyxnQkFBQUEsR0FBRyxFQUFDO0FBQUwsZUFBckIsQ0FYRTs7QUFBQTtBQWNUNkIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFkUyxnREFlRmhDLEdBQUcsQ0FBQ0ssSUFBSixDQUNGa0MsSUFERSxDQWZFOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFzQmJKLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUF0QmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5QnBCO0FBaElTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuL3VzZXIubW9kZWwnXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgcmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmV4cG9ydCBkZWZhdWx0e1xuICAgIGZpbmRBbGwocmVxLHJlcyl7XG4gICAgICAgIC8vIHJlcy5qc29uKHttc2c6XCJmaW5kIGFsbCB1c2Vyc1wifSk7XG4gICAgICAgIFVzZXIuZmluZCgpLnRoZW4oZW1wbG95ZWU9PnJlcy5qc29uKGVtcGxveWVlKSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycilcbiAgICAgICAgKVxuICAgIH0sXG4gICAgZmluZE9uZShyZXEscmVzKXtcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkXG4gICAgICAgIFVzZXIuZmluZEJ5SWQoaWQpLnRoZW4oXG4gICAgICAgICAgICBlbXBsb3llZSA9PntcbiAgICAgICAgICAgICAgICBpZighZW1wbG95ZWUpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVycjpcImVtcGxveWVlIG5vdCBmb3VuZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wbG95ZWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLmNhdGNoKFxuICAgICAgICAgICAgZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycilcbiAgICAgICAgKVxuICAgIH0sXG4gICAgZGV0ZXRlKHJlcSxyZXMpe1xuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcbiAgICAgICAgVXNlci5maW5kQnlJZEFuZFJlbW92ZShpZCkudGhlbihcbiAgICAgICAgICAgIGVtcGxveWVlID0+e1xuICAgICAgICAgICAgICAgIGlmKCFlbXBsb3llZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyOlwiY3VzdG9tZXIgbm90IGZvdW5kXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXBsb3llZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfSxcbiAgICB1cGRhdGUocmVxLHJlcyl7XG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxuICAgICAgICBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKHtfaWQ6aWR9LHskc2V0OnJlcS5ib2R5fSx7bmV3OiB0cnVlfSkudGhlbihcbiAgICAgICAgICAgIGVtcGxveWVlID0+e1xuICAgICAgICAgICAgICAgIGlmKCFlbXBsb3llZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyOlwiZW1wbG95ZWUgbm90IGZvdW5kXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXBsb3llZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfSxcbiAgIGNyZWF0ZShyZXEsIHJlcyl7XG4gICAgICAgIGxldHtmbmFtZSxsbmFtZSxlbWFpbCxwaG9uZSwgZ2VuZGVyLGRsTm8scGFzc3dvcmQsIGNyZWF0ZWRBdH09IHJlcS5ib2R5O1xuICAgICAgICBpZighZm5hbWUpe1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyOlwiZmlyc3QgbmFtZSBpcyByZXF1aXJlZC5cIn0pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCFsbmFtZSl7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6XCJsYXN0IG5hbWUgaXMgcmVxdWlyZWQuXCJ9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVtYWlsKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcImVtYWlsIGlzIHJlcXVpcmVkLlwifSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwaG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJwaG9uZSBpcyByZXF1aXJlZC5cIn0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZ2VuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcImdlbmRlciBpcyByZXF1aXJlZC5cIn0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGxObykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJkbG5vIGlzIHJlcXVpcmVkLlwifSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXNzd29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJwYXNzd29yZCBpcyByZXF1aXJlZC5cIn0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY3JlYXRlZEF0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcImRhdGUgaXMgcmVxdWlyZWQuXCJ9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9LFxuICAgIGFzeW5jIHNpZ251cChyZXEsIHJlcyl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7ZXJyb3IsIHZhbHVlfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRpb25TY2hlbWEocmVxLmJvZHkpO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oIGVycm9yLmRldGFpbHMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYXdhaXQgVXNlci5jcmVhdGUodmFsdWUpXG4gICAgICAgIC50aGVuKGN1c3RvbWVyID0+IHJlcy5qc29uKGN1c3RvbWVyKSlcbiAgICAgICAgLmNhdGNoKGVycj0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgYXN5bmMgbG9naW4ocmVxLCByZXMpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qge2Vycm9yLCB2YWx1ZX0gPSB1c2VyU2VydmljZS52YWxpZGF0aW9uTG9naW5TY2hlbWEocmVxLmJvZHkpO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oIGVycm9yLmRldGFpbHMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe2VtYWlsOiB2YWx1ZS5lbWFpbH0pO1xuICAgICAgICAgICAgaWYoIXVzZXIpe1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiSW52YWxpZCBFbWFpbFwifSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodXNlci5wYXNzd29yZCAhPSB2YWx1ZS5wYXNzd29yZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJJbnZhbGlkIFBhc3N3b3JkXCJ9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oXG4gICAgICAgICAgICAgICAgICAgICB1c2VyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cblxuICAgIH1cblxufTsiXX0=