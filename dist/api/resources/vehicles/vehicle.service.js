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
      vehicleName: _joi["default"].string().required(),
      vehicleNo: _joi["default"].string().required(),
      vehicleType: _joi["default"].string().required(),
      registrationNo: _joi["default"].string().required(),
      insuranceNo: _joi["default"].string().required(),
      rentPerDay: _joi["default"].number().required(),
      securityAmount: _joi["default"].number(),
      fine: _joi["default"].number()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3ZlaGljbGVzL3ZlaGljbGUuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJ2ZWhpY2xlTmFtZSIsInN0cmluZyIsInJlcXVpcmVkIiwidmVoaWNsZU5vIiwidmVoaWNsZVR5cGUiLCJyZWdpc3RyYXRpb25ObyIsImluc3VyYW5jZU5vIiwicmVudFBlckRheSIsIm51bWJlciIsInNlY3VyaXR5QW1vdW50IiwiZmluZSIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNjO0FBQ1ZBLEVBQUFBLGdCQURVLDRCQUNPQyxJQURQLEVBQ1k7QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxXQUFXLEVBQUVILGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFEZ0I7QUFFN0JDLE1BQUFBLFNBQVMsRUFBRU4sZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZrQjtBQUc3QkUsTUFBQUEsV0FBVyxFQUFFUCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBSGdCO0FBSTdCRyxNQUFBQSxjQUFjLEVBQUVSLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFKYTtBQUs3QkksTUFBQUEsV0FBVyxFQUFFVCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBTGdCO0FBTTdCSyxNQUFBQSxVQUFVLEVBQUVWLGdCQUFJVyxNQUFKLEdBQWFOLFFBQWIsRUFOaUI7QUFPN0JPLE1BQUFBLGNBQWMsRUFBRVosZ0JBQUlXLE1BQUosRUFQYTtBQVE3QkUsTUFBQUEsSUFBSSxFQUFFYixnQkFBSVcsTUFBSjtBQVJ1QixLQUFsQixDQUFmOztBQURrQix3QkFZSVgsZ0JBQUljLFFBQUosQ0FBYWhCLElBQWIsRUFBbUJDLE1BQW5CLENBWko7QUFBQSxRQVlYZ0IsS0FaVyxpQkFZWEEsS0FaVztBQUFBLFFBWUpDLEtBWkksaUJBWUpBLEtBWkk7O0FBYWxCLFFBQUlELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxPQUFuQixFQUEyQjtBQUN2QixhQUFPO0FBQUNGLFFBQUFBLEtBQUssRUFBTEE7QUFBRCxPQUFQO0FBQ0g7O0FBQ0QsV0FBTztBQUFDQyxNQUFBQSxLQUFLLEVBQUxBO0FBQUQsS0FBUDtBQUVIO0FBbkJTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XG5leHBvcnQgZGVmYXVsdHtcbiAgICB2YWxpZGF0aW9uU2NoZW1hKGJvZHkpe1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgICAgICB2ZWhpY2xlTmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICB2ZWhpY2xlTm86IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgdmVoaWNsZVR5cGU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uTm86IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgaW5zdXJhbmNlTm86IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgcmVudFBlckRheTogSm9pLm51bWJlcigpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICBzZWN1cml0eUFtb3VudDogSm9pLm51bWJlcigpLFxuICAgICAgICAgICAgZmluZTogSm9pLm51bWJlcigpXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0eyBlcnJvciwgdmFsdWV9PSBKb2kudmFsaWRhdGUoYm9keSwgc2NoZW1hKTtcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xuICAgICAgICAgICAgcmV0dXJuIHtlcnJvcn07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt2YWx1ZX07XG5cbiAgICB9XG59Il19