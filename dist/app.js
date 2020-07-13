"use strict";

require("@babel/polyfill");

var _api = require("./api");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var app = express();
var PORT = 3000;
_mongoose["default"].Promise = global.Promise;

_mongoose["default"].connect('mongodb://localhost/vehicleHatt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  'useCreateIndex': true
}); // const users=[
//     {id: 1, name:'John'},
//     {id: 2, name:'Johny'},
//     {id: 3, name:'Tony'},
//     {id: 4, name:'Rocky'},
// ]


app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])());
app.use('/api', _api.restRouter);
app.use(function (req, res, next) {
  var error = new Error("Not Founf");
  error.status = 404;
  error.message = "Invalid route";
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});
app.use(function (req, res, next) {
  console.log("middleware before  api call");
  next();
}); // app.get('/users',(req, res)=>{
//     res.json(users)
// })

app.get('/', function (req, res) {
  res.json({
    msg: 'API running '
  });
});
app.listen(PORT, function () {
  console.log("server running on port ".concat(PORT));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJhcHAiLCJQT1JUIiwibW9uZ29vc2UiLCJQcm9taXNlIiwiZ2xvYmFsIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicmVzdFJvdXRlciIsInJlcSIsInJlcyIsIm5leHQiLCJlcnJvciIsIkVycm9yIiwic3RhdHVzIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJtc2ciLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFOQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXZCOztBQUNBLElBQU1DLEdBQUcsR0FBR0YsT0FBTyxFQUFuQjtBQUNBLElBQU1HLElBQUksR0FBRyxJQUFiO0FBS0FDLHFCQUFTQyxPQUFULEdBQWtCQyxNQUFNLENBQUNELE9BQXpCOztBQUNBRCxxQkFBU0csT0FBVCxDQUFpQixpQ0FBakIsRUFBbUQ7QUFBQ0MsRUFBQUEsZUFBZSxFQUFDLElBQWpCO0FBQXVCQyxFQUFBQSxrQkFBa0IsRUFBRSxJQUEzQztBQUFnRCxvQkFBaUI7QUFBakUsQ0FBbkQsRSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FQLEdBQUcsQ0FBQ1EsR0FBSixDQUFRQyx1QkFBV0MsSUFBWCxFQUFSO0FBQ0FWLEdBQUcsQ0FBQ1EsR0FBSixDQUFRQyx1QkFBV0UsVUFBWCxDQUNKO0FBQUVDLEVBQUFBLFFBQVEsRUFBQztBQUFYLENBREksQ0FBUjtBQUdBWixHQUFHLENBQUNRLEdBQUosQ0FBUSx1QkFBUjtBQUNBUixHQUFHLENBQUNRLEdBQUosQ0FBUSxNQUFSLEVBQWVLLGVBQWY7QUFDQWIsR0FBRyxDQUFDUSxHQUFKLENBQVEsVUFBQ00sR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBa0I7QUFDdEIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSxXQUFWLENBQWQ7QUFDQUQsRUFBQUEsS0FBSyxDQUFDRSxNQUFOLEdBQWUsR0FBZjtBQUNBRixFQUFBQSxLQUFLLENBQUNHLE9BQU4sR0FBYyxlQUFkO0FBQ0FKLEVBQUFBLElBQUksQ0FBQ0MsS0FBRCxDQUFKO0FBR0gsQ0FQRDtBQVFBakIsR0FBRyxDQUFDUSxHQUFKLENBQVEsVUFBQ1MsS0FBRCxFQUFPSCxHQUFQLEVBQVdDLEdBQVgsRUFBZUMsSUFBZixFQUFzQjtBQUMxQkQsRUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVdGLEtBQUssQ0FBQ0UsTUFBTixJQUFjLEdBQXpCO0FBQ0EsU0FBT0osR0FBRyxDQUFDTCxJQUFKLENBQVM7QUFDWk8sSUFBQUEsS0FBSyxFQUFFO0FBQ0hHLE1BQUFBLE9BQU8sRUFBRUgsS0FBSyxDQUFDRztBQURaO0FBREssR0FBVCxDQUFQO0FBS0gsQ0FQRDtBQVNBcEIsR0FBRyxDQUFDUSxHQUFKLENBQVEsVUFBVU0sR0FBVixFQUFlQyxHQUFmLEVBQW1CQyxJQUFuQixFQUF3QjtBQUM1QkssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDQU4sRUFBQUEsSUFBSTtBQUNQLENBSEQsRSxDQUlBO0FBQ0E7QUFDQTs7QUFDQWhCLEdBQUcsQ0FBQ3VCLEdBQUosQ0FBUSxHQUFSLEVBQVksVUFBQ1QsR0FBRCxFQUFNQyxHQUFOLEVBQVk7QUFDcEJBLEVBQUFBLEdBQUcsQ0FBQ0wsSUFBSixDQUNJO0FBQUVjLElBQUFBLEdBQUcsRUFBQztBQUFOLEdBREo7QUFHSCxDQUpEO0FBS0F4QixHQUFHLENBQUN5QixNQUFKLENBQVd4QixJQUFYLEVBQWdCLFlBQUk7QUFDaEJvQixFQUFBQSxPQUFPLENBQUNDLEdBQVIsa0NBQXNDckIsSUFBdEM7QUFDSCxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnO1xuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5jb25zdCBQT1JUID0gMzAwMFxuaW1wb3J0IHsgcmVzdFJvdXRlciB9IGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0ICBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5tb25nb29zZS5Qcm9taXNlPSBnbG9iYWwuUHJvbWlzZTtcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3QvdmVoaWNsZUhhdHQnLHt1c2VOZXdVcmxQYXJzZXI6dHJ1ZSwgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLCd1c2VDcmVhdGVJbmRleCc6dHJ1ZX0pO1xuLy8gY29uc3QgdXNlcnM9W1xuLy8gICAgIHtpZDogMSwgbmFtZTonSm9obid9LFxuLy8gICAgIHtpZDogMiwgbmFtZTonSm9obnknfSxcbi8vICAgICB7aWQ6IDMsIG5hbWU6J1RvbnknfSxcbi8vICAgICB7aWQ6IDQsIG5hbWU6J1JvY2t5J30sXG4vLyBdXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKFxuICAgIHsgZXh0ZW5kZWQ6ZmFsc2UgfVxuKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKCcvYXBpJyxyZXN0Um91dGVyKTtcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KT0+e1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFwiTm90IEZvdW5mXCIpO1xuICAgIGVycm9yLnN0YXR1cyA9IDQwNDtcbiAgICBlcnJvci5tZXNzYWdlPVwiSW52YWxpZCByb3V0ZVwiO1xuICAgIG5leHQoZXJyb3IpO1xuICAgIFxuXG59KVxuYXBwLnVzZSgoZXJyb3IscmVxLHJlcyxuZXh0KT0+e1xuICAgIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzfHw1MDApO1xuICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgIH1cbiAgICB9KVxufSk7XG5cbmFwcC51c2UoZnVuY3Rpb24gKHJlcSwgcmVzLG5leHQpe1xuICAgIGNvbnNvbGUubG9nKFwibWlkZGxld2FyZSBiZWZvcmUgIGFwaSBjYWxsXCIpO1xuICAgIG5leHQoKTtcbn0pO1xuLy8gYXBwLmdldCgnL3VzZXJzJywocmVxLCByZXMpPT57XG4vLyAgICAgcmVzLmpzb24odXNlcnMpXG4vLyB9KVxuYXBwLmdldCgnLycsKHJlcSwgcmVzKT0+e1xuICAgIHJlcy5qc29uKFxuICAgICAgICB7IG1zZzonQVBJIHJ1bm5pbmcgJyB9XG4gICAgICAgIClcbn0pXG5hcHAubGlzdGVuKFBPUlQsKCk9PntcbiAgICBjb25zb2xlLmxvZyhgc2VydmVyIHJ1bm5pbmcgb24gcG9ydCAke1BPUlR9YCk7XG59KTtcbiJdfQ==