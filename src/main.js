import Cliente from "./clientes.js";
import Impuesto from "./impuestos.js";

const impuesto = new Impuesto(1000000,100000);

const cliente = new Cliente("Juan Pedro",impuesto);

const impuestoPorPagar=cliente.calcularImpuesto();
document.body.innerHTML=`<h1>${impuestoPorPagar.texto} ${impuestoPorPagar.valor} </h1>`

console.log(impuestoPorPagar);