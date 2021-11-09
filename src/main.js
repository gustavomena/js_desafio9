import Cliente from "./clientes.js";
import Impuesto from "./impuestos.js";

const monto_bruto_anual=parseInt( prompt("ingrese monto bruto anual",""));
const deducciones=parseInt( prompt("ingrese monto por deducciones",""));
const nombreCliente=prompt("Ingrese nombre del cliente");

const impuesto = new Impuesto(monto_bruto_anual,deducciones);

const cliente = new Cliente(nombreCliente,impuesto);

const impuestoPorPagar=cliente.calcularImpuesto();
document.body.innerHTML=`<h2>${nombreCliente}: ${impuestoPorPagar.texto} ${impuestoPorPagar.valor} </h2>`

console.log(impuestoPorPagar);