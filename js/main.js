//simulador de compra

let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste un nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado: " + nombreUsuario);
}

const Compra = (producto,precio,cantidad)=>{
    return "\nProducto: "+ producto+
    "\nPrecio: "+ precio+
    "\nCantidad: "+ cantidad+
    "\nTotal: "+total
}

let rta = ""
let total = 0;
let suCompra = ""

do{
    let producto = prompt("Que producto desea comprar")
    let precio = Number(prompt("Ingrese el precio del producto que quiere comprar"))
    let cantidad = Number(prompt("Ingrese la cantidad deseada"))
    total = total + precio * cantidad

    suCompra += Compra(producto,precio,cantidad,total)

    alert("El total de su compra es: " +total)

    rta = prompt("Si desea finalizar su compra ingrese ESC. Si quiere seguir comprado ingrese otra tecla ").toUpperCase()
}while(rta != "ESC")

comprobante(suCompra)

function comprobante(suCompra){
    alert(
    "Gracias por comprar en nuestra pagina, su compra fue:  "+suCompra)
}