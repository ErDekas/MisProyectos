function calcularPrecioTotal(precioUnitario,cantidad){
    precioUnitario = prompt('Introduce el precio del producto:' , '');
    cantidad = prompt('Introduce la cantidad de productos:' , '');
    if(typeof precioUnitario !== 'number' || cantidad !== 'number'){
        return 'Error, deben ser números ambos parámetros';
    }
    
    const precioTotal = precioUnitario * cantidad;
    return precioTotal;

};