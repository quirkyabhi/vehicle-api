"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _issuedVehicle = _interopRequireDefault(require("./issuedVehicle.model"));

var _issuedVehicle2 = _interopRequireDefault(require("./issuedVehicle.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import { response } from 'express';
var _default = {
  findAll: function findAll(req, res) {
    // res.json({msg:"find all users"});
    _issuedVehicle["default"].find().then(function (employee) {
      return res.json(employee);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _issuedVehicle["default"].findById(id).then(function (employee) {
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

    _issuedVehicle["default"].findByIdAndRemove(id).then(function (employee) {
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
      var _issuedVehicleService, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _issuedVehicleService = _issuedVehicle2["default"].validationSchema(req.body), error = _issuedVehicleService.error, value = _issuedVehicleService.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error.details));

            case 4:
              _context.next = 6;
              return _issuedVehicle["default"].create(value).then(function (employee) {
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

    _issuedVehicle["default"].findByIdAndUpdate({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2lzc3VlZFZlaGljbGVzL2lzc3VlZFZlaGljbGUuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwiSXNzdWVkVmVoaWNsZSIsImZpbmQiLCJ0aGVuIiwiZW1wbG95ZWUiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJmaW5kQnlJZEFuZFJlbW92ZSIsImNyZWF0ZSIsImlzc3VlZFZlaGljbGVTZXJ2aWNlIiwidmFsaWRhdGlvblNjaGVtYSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIl9pZCIsIiRzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFDQTtlQUNjO0FBQ1ZBLEVBQUFBLE9BRFUsbUJBQ0ZDLEdBREUsRUFDRUMsR0FERixFQUNNO0FBQ1o7QUFDQUMsOEJBQWNDLElBQWQsR0FBcUJDLElBQXJCLENBQTBCLFVBQUFDLFFBQVE7QUFBQSxhQUFFSixHQUFHLENBQUNLLElBQUosQ0FBU0QsUUFBVCxDQUFGO0FBQUEsS0FBbEMsV0FFSSxVQUFBRSxHQUFHO0FBQUEsYUFBSU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQUZQO0FBSUgsR0FQUztBQVNWRSxFQUFBQSxPQVRVLG1CQVNGVCxHQVRFLEVBU0VDLEdBVEYsRUFTTTtBQUNaLFFBQU1TLEVBQUUsR0FBR1YsR0FBRyxDQUFDVyxNQUFKLENBQVdELEVBQXRCOztBQUNBUiw4QkFBY1UsUUFBZCxDQUF1QkYsRUFBdkIsRUFBMkJOLElBQTNCLENBQ0ksVUFBQUMsUUFBUSxFQUFHO0FBQ1AsVUFBRyxDQUFDQSxRQUFKLEVBQWE7QUFDVCxlQUFPSixHQUFHLENB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LENBQVA7QUFHSCxPQUpELE1BS0k7QUFDQSxlQUFPTixHQUFHLENBQUNLLElBQUosQ0FBU0QsUUFBVCxDQUFQO0FBQ0g7QUFDSixLQVZMLFdBWUksVUFBQUUsR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FaUDtBQWNIO0FBN0VTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXNzdWVkVmVoaWNsZSBmcm9tICcuL2lzc3VlZFZlaGljbGUubW9kZWwnXG5pbXBvcnQgaXNzdWVkVmVoaWNsZVNlcnZpY2UgZnJvbSAnLi9pc3N1ZWRWZWhpY2xlLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgcmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmV4cG9ydCBkZWZhdWx0e1xuICAgIGZpbmRBbGwocmVxLHJlcyl7XG4gICAgICAgIC8vIHJlcy5qc29uKHttc2c6XCJmaW5kIGFsbCB1c2Vyc1wifSk7XG4gICAgICAgIElzc3VlZFZlaGljbGUuZmluZCgpLnRoZW4oZW1wbG95ZWU9PnJlcy5qc29uKGVtcGxveWVlKSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycilcbiAgICAgICAgKVxuICAgIH0sXG5cbiAgICBmaW5kT25lKHJlcSxyZXMpe1xuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcbiAgICAgICAgSXNzdWVkVmVoaWNsZS5maW5kQnlJZChpZCkudGhlbihcbiAgICAgICAgICAgIGVtcGxveWVlID0+e1xuICAgICAgICAgICAgICAgIGlmKCFlbXBsb3llZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyOlwidmVoaWNsZSBub3QgZm91bmRcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVtcGxveWVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5jYXRjaChcbiAgICAgICAgICAgIGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpXG4gICAgICAgIClcbiAgICB9LFxuXG4gICAgZGVsZXRlKHJlcSxyZXMpe1xuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcbiAgICAgICAgSXNzdWVkVmVoaWNsZS5maW5kQnlJZEFuZFJlbW92ZShpZCkudGhlbihcbiAgICAgICAgICAgIGVtcGxveWVlID0+e1xuICAgICAgICAgICAgICAgIGlmKCFlbXBsb3llZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyOlwidmVoaWNsZSBub3QgZm91bmRcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVtcGxveWVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5jYXRjaChcbiAgICAgICAgICAgIGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpXG4gICAgICAgIClcbiAgICB9LFxuXG4gICAgYXN5bmMgY3JlYXRlKHJlcSwgcmVzKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHtlcnJvciwgdmFsdWV9ID0gaXNzdWVkVmVoaWNsZVNlcnZpY2UudmFsaWRhdGlvblNjaGVtYShyZXEuYm9keSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbiggZXJyb3IuZGV0YWlscyApO1xuICAgICAgICAgICAgfVxuICAgICAgICBhd2FpdCBJc3N1ZWRWZWhpY2xlLmNyZWF0ZSh2YWx1ZSlcbiAgICAgICAgLnRoZW4oZW1wbG95ZWUgPT4gcmVzLmpzb24oZW1wbG95ZWUpKVxuICAgICAgICAuY2F0Y2goZXJyPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICBcbiAgICB9LFxuICAgIHVwZGF0ZShyZXEscmVzKXtcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkXG4gICAgICAgIElzc3VlZFZlaGljbGUuZmluZEJ5SWRBbmRVcGRhdGUoe19pZDppZH0seyRzZXQ6cmVxLmJvZHl9LHtuZXc6IHRydWV9KS50aGVuKFxuICAgICAgICAgICAgZW1wbG95ZWUgPT57XG4gICAgICAgICAgICAgICAgaWYoIWVtcGxveWVlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBlcnI6XCJlbXBsb3llZSBub3QgZm91bmRcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVtcGxveWVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5jYXRjaChcbiAgICAgICAgICAgIGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpXG4gICAgICAgIClcbiAgICB9LFxuXG5cbn0iXX0=