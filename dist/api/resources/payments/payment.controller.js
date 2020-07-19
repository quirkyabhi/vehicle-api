"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _payment = _interopRequireDefault(require("./payment.model"));

var _payment2 = _interopRequireDefault(require("./payment.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import { response } from 'express';
var _default = {
  findAll: function findAll(req, res) {
    // res.json({msg:"find all users"});
    _payment["default"].find().then(function (employee) {
      return res.json(employee);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _payment["default"].findById(id).then(function (employee) {
      if (!employee) {
        return res.status(400).json({
          err: "vehicle not found"
        });
      } else {
        return res.json(employee);
      }
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  "delete": function _delete(req, res) {
    var id = req.params.id;

    _payment["default"].findByIdAndRemove(id).then(function (employee) {
      if (!employee) {
        return res.status(400).json({
          err: "vehicle not found"
        });
      } else {
        return res.json(employee);
      }
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _paymentService$valid, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _paymentService$valid = _payment2["default"].validationSchema(req.body), error = _paymentService$valid.error, value = _paymentService$valid.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error.details));

            case 4:
              _context.next = 6;
              return _payment["default"].create(value).then(function (employee) {
                return res.json(employee);
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
  update: function update(req, res) {
    var id = req.params.id;

    _payment["default"].findByIdAndUpdate({
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
  findMyPaidVehicle: function findMyPaidVehicle(req, res, next) {
    var id = req.params.id; // const {page =1, perPage=10}= req.query;
    // const options={
    //     page: parseInt(page,10),
    //     limit:parseInt(perPage,10),
    //     populate:'userId refId'
    // }

    _payment["default"].find({
      'userId': id
    }).populate('issueId').then(function (data) {
      return res.json(data);
    }) // Transaction.paginate({'userId':id},options).then(
    //     data => res.json(data)
    // )
    ["catch"](function (err) {
      return res.status(500).json(err);
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3BheW1lbnRzL3BheW1lbnQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwiUGF5bWVudCIsImZpbmQiLCJ0aGVuIiwiZW1wbG95ZWUiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJmaW5kQnlJZEFuZFJlbW92ZSIsImNyZWF0ZSIsInBheW1lbnRTZXJ2aWNlIiwidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIl9pZCIsIiRzZXQiLCJmaW5kTXlQYWlkVmVoaWNsZSIsIm5leHQiLCJwb3B1bGF0ZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFDQTtlQUNjO0FBQ1ZBLEVBQUFBLE9BRFUsbUJBQ0ZDLEdBREUsRUFDRUMsR0FERixFQUNNO0FBQ1o7QUFDQUMsd0JBQVFDLElBQVIsR0FBZUMsSUFBZixDQUFvQixVQUFBQyxRQUFRO0FBQUEsYUFBRUosR0FBRyxDQUFDSyxJQUFKLENBQVNELFFBQVQsQ0FBRjtBQUFBLEtBQTVCLFdBRUksVUFBQUUsR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FGUDtBQUlILEdBUFM7QUFTVkUsRUFBQUEsT0FUVSxtQkFTRlQsR0FURSxFQVNFQyxHQVRGLEVBU007QUFDWixRQUFNUyxFQUFFLEdBQUdWLEdBQUcsQ0FBQ1csTUFBSixDQUFXRCxFQUF0Qjs7QUFDQVIsd0JBQVFVLFFBQVIsQ0FBaUJGLEVBQWpCLEVBQXFCTixJQUFyQixDQUNJLFVBQUFDLFFBQVEsRUFBRztBQUNQLFVBQUcsQ0FBQ0EsUUFBSixFQUFh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LEVBQUM7QUFBTixTQURHLENBQVA7QUFHSCxPQUpELE1BS0k7QUFDQSxlQUFPTixHQUFHLENBQUNLLElBQUosQ0FBU0QsUUFBVCxDQUFQO0FBQ0g7QUFDSixLQVZMLFdBWUksVUFBQUUsR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FaUDtBQWNILEdBN0VTO0FBOEVWb0IsRUFBQUEsaUJBOUVVLDZCQThFUTNCLEdBOUVSLEVBOEVhQyxHQTlFYixFQThFaUIyQixJQTlFakIsRUE4RXNCO0FBQUEsUUFDdkJsQixFQUR1QixHQUNqQlYsR0FBRyxDQUFDVyxNQURhLENBQ3ZCRCxFQUR1QixFQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFSLHdCQUFRQyxJQUFSLENBQWE7QUFBQyxnQkFBU087QUFBVixLQUFiLEVBQ0NtQixRQURELENBQ1UsU0FEVixFQUVDekIsSUFGRCxDQUdJLFVBQUEwQixJQUFJO0FBQUEsYUFBSTdCLEdBQUcsQ0FBQ0ssSUFBSixDQUFTd0IsSUFBVCxDQUFKO0FBQUEsS0FIUixFQUtBO0FBQ0E7QUFDQTtBQVBBLGNBU0ksVUFBQXZCLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBVFA7QUFXSDtBQWxHUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBheW1lbnQgZnJvbSAnLi9wYXltZW50Lm1vZGVsJztcbmltcG9ydCBwYXltZW50U2VydmljZSBmcm9tICcuL3BheW1lbnQuc2VydmljZSc7XG4vLyBpbXBvcnQgeyByZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuZXhwb3J0IGRlZmF1bHR7XG4gICAgZmluZEFsbChyZXEscmVzKXtcbiAgICAgICAgLy8gcmVzLmpzb24oe21zZzpcImZpbmQgYWxsIHVzZXJzXCJ9KTtcbiAgICAgICAgUGF5bWVudC5maW5kKCkudGhlbihlbXBsb3llZT0+cmVzLmpzb24oZW1wbG95ZWUpKVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfSxcblxuICAgIGZpbmRPbmUocmVxLHJlcyl7XG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxuICAgICAgICBQYXltZW50LmZpbmRCeUlkKGlkKS50aGVuKFxuICAgICAgICAgICAgZW1wbG95ZWUgPT57XG4gICAgICAgICAgICAgICAgaWYoIWVtcGxveWVlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBlcnI6XCJ2ZWhpY2xlIG5vdCBmb3VuZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wbG95ZWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLmNhdGNoKFxuICAgICAgICAgICAgZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycilcbiAgICAgICAgKVxuICAgIH0sXG5cbiAgICBkZWxldGUocmVxLHJlcyl7XG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxuICAgICAgICBQYXltZW50LmZpbmRCeUlkQW5kUmVtb3ZlKGlkKS50aGVuKFxuICAgICAgICAgICAgZW1wbG95ZWUgPT57XG4gICAgICAgICAgICAgICAgaWYoIWVtcGxveWVlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBlcnI6XCJ2ZWhpY2xlIG5vdCBmb3VuZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wbG95ZWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLmNhdGNoKFxuICAgICAgICAgICAgZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycilcbiAgICAgICAgKVxuICAgIH0sXG5cbiAgICBhc3luYyBjcmVhdGUocmVxLCByZXMpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qge2Vycm9yLCB2YWx1ZX0gPSBwYXltZW50U2VydmljZS52YWxpZGF0aW9uU2NoZW1hKHJlcS5ib2R5KTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKCBlcnJvci5kZXRhaWxzICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGF3YWl0IFBheW1lbnQuY3JlYXRlKHZhbHVlKVxuICAgICAgICAudGhlbihlbXBsb3llZSA9PiByZXMuanNvbihlbXBsb3llZSkpXG4gICAgICAgIC5jYXRjaChlcnI9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gIFxuICAgIH0sXG4gICAgdXBkYXRlKHJlcSxyZXMpe1xuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcbiAgICAgICAgUGF5bWVudC5maW5kQnlJZEFuZFVwZGF0ZSh7X2lkOmlkfSx7JHNldDpyZXEuYm9keX0se25ldzogdHJ1ZX0pLnRoZW4oXG4gICAgICAgICAgICBlbXBsb3llZSA9PntcbiAgICAgICAgICAgICAgICBpZighZW1wbG95ZWUpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVycjpcImVtcGxveWVlIG5vdCBmb3VuZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wbG95ZWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLmNhdGNoKFxuICAgICAgICAgICAgZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycilcbiAgICAgICAgKVxuICAgIH0sXG4gICAgZmluZE15UGFpZFZlaGljbGUocmVxLCByZXMsbmV4dCl7XG4gICAgICAgIGxldCB7aWR9ID0gcmVxLnBhcmFtcztcbiAgICAgICAgLy8gY29uc3Qge3BhZ2UgPTEsIHBlclBhZ2U9MTB9PSByZXEucXVlcnk7XG4gICAgICAgIC8vIGNvbnN0IG9wdGlvbnM9e1xuICAgICAgICAvLyAgICAgcGFnZTogcGFyc2VJbnQocGFnZSwxMCksXG4gICAgICAgIC8vICAgICBsaW1pdDpwYXJzZUludChwZXJQYWdlLDEwKSxcbiAgICAgICAgLy8gICAgIHBvcHVsYXRlOid1c2VySWQgcmVmSWQnXG4gICAgICAgIC8vIH1cblxuICAgICAgICBQYXltZW50LmZpbmQoeyd1c2VySWQnOmlkfSlcbiAgICAgICAgLnBvcHVsYXRlKCdpc3N1ZUlkJyApXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgZGF0YSA9PiByZXMuanNvbihkYXRhKVxuICAgICAgICApXG4gICAgICAgIC8vIFRyYW5zYWN0aW9uLnBhZ2luYXRlKHsndXNlcklkJzppZH0sb3B0aW9ucykudGhlbihcbiAgICAgICAgLy8gICAgIGRhdGEgPT4gcmVzLmpzb24oZGF0YSlcbiAgICAgICAgLy8gKVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfVxuXG5cbn0iXX0=