"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto = new _impuestos["default"](1000000, 100000);
var cliente = new _clientes["default"]("Juan Pedro", impuesto);
var impuestoPorPagar = cliente.calcularImpuesto();
document.body.innerHTML = "<h1>".concat(impuestoPorPagar.texto, " ").concat(impuestoPorPagar.valor, " </h1>");
console.log(impuestoPorPagar);