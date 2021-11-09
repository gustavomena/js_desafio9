"use strict";

require("core-js/modules/es.parse-int.js");

var _clientes = _interopRequireDefault(require("./clientes.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var monto_bruto_anual = parseInt(prompt("ingrese monto bruto anual", ""));
var deducciones = parseInt(prompt("ingrese monto por deducciones", ""));
var nombreCliente = prompt("Ingrese nombre del cliente");
var impuesto = new _impuestos["default"](monto_bruto_anual, deducciones);
var cliente = new _clientes["default"](nombreCliente, impuesto);
var impuestoPorPagar = cliente.calcularImpuesto();
document.body.innerHTML = "<h2>".concat(nombreCliente, ": ").concat(impuestoPorPagar.texto, " ").concat(impuestoPorPagar.valor, " </h2>");
console.log(impuestoPorPagar);