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
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3BheW1lbnRzL3BheW1lbnQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwiUGF5bWVudCIsImZpbmQiLCJ0aGVuIiwiZW1wbG95ZWUiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJmaW5kQnlJZEFuZFJlbW92ZSIsImNyZWF0ZSIsInBheW1lbnRTZXJ2aWNlIiwidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIl9pZCIsIiRzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFDQTtlQUNjO0FBQ1ZBLEVBQUFBLE9BRFUsbUJBQ0ZDLEdBREUsRUFDRUMsR0FERixFQUNNO0FBQ1o7QUFDQUMsd0JBQVFDLElBQVIsR0FBZUMsSUFBZixDQUFvQixVQUFBQyxRQUFRO0FBQUEsYUFBRUosR0FBRyxDQUFDSyxJQUFKLENBQVNELFFBQVQsQ0FBRjtBQUFBLEtBQTVCLFdBRUksVUFBQUUsR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FGUDtBQUlILEdBUFM7QUFTVkUsRUFBQUEsT0FUVSxtQkFTRlQsR0FURSxFQVNFQyxHQVRGLEVBU007QUFDWixRQUFNUyxFQUFFLEdBQUdWLEdBQUcsQ0FBQ1csTUFBSixDQUFXRCxFQUF0Qjs7QUFDQVIsd0JBQVFVLFFBQVIsQ0FBaUJGLEVBQWpCLEVBQXFCTixJQUFyQixDQUNJLFVBQUFDLFFBQVEsRUFBRztBQUNQLFVBQUcsQ0FBQ0EsUUFBSixFQUFhO0FBQ1QsZUFBT0osR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYs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TixHQUFHLENBQUNLLElBQUosQ0FBU0QsUUFBVCxDQUFQO0FBQ0g7QUFDSixLQVZMLFdBWUksVUFBQUUsR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FaUDtBQWNIO0FBN0VTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGF5bWVudCBmcm9tICcuL3BheW1lbnQubW9kZWwnO1xuaW1wb3J0IHBheW1lbnRTZXJ2aWNlIGZyb20gJy4vcGF5bWVudC5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IHJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5leHBvcnQgZGVmYXVsdHtcbiAgICBmaW5kQWxsKHJlcSxyZXMpe1xuICAgICAgICAvLyByZXMuanNvbih7bXNnOlwiZmluZCBhbGwgdXNlcnNcIn0pO1xuICAgICAgICBQYXltZW50LmZpbmQoKS50aGVuKGVtcGxveWVlPT5yZXMuanNvbihlbXBsb3llZSkpXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgIGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpXG4gICAgICAgIClcbiAgICB9LFxuXG4gICAgZmluZE9uZShyZXEscmVzKXtcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkXG4gICAgICAgIFBheW1lbnQuZmluZEJ5SWQoaWQpLnRoZW4oXG4gICAgICAgICAgICBlbXBsb3llZSA9PntcbiAgICAgICAgICAgICAgICBpZighZW1wbG95ZWUpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVycjpcInZlaGljbGUgbm90IGZvdW5kXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXBsb3llZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfSxcblxuICAgIGRlbGV0ZShyZXEscmVzKXtcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkXG4gICAgICAgIFBheW1lbnQuZmluZEJ5SWRBbmRSZW1vdmUoaWQpLnRoZW4oXG4gICAgICAgICAgICBlbXBsb3llZSA9PntcbiAgICAgICAgICAgICAgICBpZighZW1wbG95ZWUpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVycjpcInZlaGljbGUgbm90IGZvdW5kXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXBsb3llZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfSxcblxuICAgIGFzeW5jIGNyZWF0ZShyZXEsIHJlcyl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7ZXJyb3IsIHZhbHVlfSA9IHBheW1lbnRTZXJ2aWNlLnZhbGlkYXRpb25TY2hlbWEocmVxLmJvZHkpO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oIGVycm9yLmRldGFpbHMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYXdhaXQgUGF5bWVudC5jcmVhdGUodmFsdWUpXG4gICAgICAgIC50aGVuKGVtcGxveWVlID0+IHJlcy5qc29uKGVtcGxveWVlKSlcbiAgICAgICAgLmNhdGNoKGVycj0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgXG4gICAgfSxcbiAgICB1cGRhdGUocmVxLHJlcyl7XG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxuICAgICAgICBQYXltZW50LmZpbmRCeUlkQW5kVXBkYXRlKHtfaWQ6aWR9LHskc2V0OnJlcS5ib2R5fSx7bmV3OiB0cnVlfSkudGhlbihcbiAgICAgICAgICAgIGVtcGxveWVlID0+e1xuICAgICAgICAgICAgICAgIGlmKCFlbXBsb3llZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyOlwiZW1wbG95ZWUgbm90IGZvdW5kXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXBsb3llZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfVxuXG5cbn0iXX0=