class Cliente{
constructor(nombre,impuesto){
    this._nombre=nombre;
    this._impuesto=impuesto;
}
get nombre() { return this._nombre } ;
set nombre(nuevo_nombre) { this._nombre = nuevo_nombre } ;


calcularImpuesto(){
    const calculoImpuesto= (this._impuesto.monto_bruto_anual - this._impuesto.deducciones)*0.21;
    return {
        texto: "Impuesto a pagar",
        valor: calculoImpuesto
    }
}

}

export default Cliente;