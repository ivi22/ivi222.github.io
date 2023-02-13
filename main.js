// Pre entrega Ramires Ivana 
// como encontrar mi trabajo ideal
function saludar()
{
   alert("Bienvenido a nuestro sitio web"); 
}
saludar();

function menu(){
    let opcion = parseInt(promp("Para continuar ingrese una opcion: 1)Crear Usuario \n 2)Iniciar secion \n 3)Buscar Comida \n 4)Salir"));
    return opcion;
}

function crearUsuario(){
    let nombre = prompt("ingrese su nombre:");
    let apellido = prompt("ingrese su apellido:");
    let contraseña = parseInt(prompt("Ingrese una contraseña"));
    let cliente = new cliente(nombre, apellido, contraseña);
    arrayClientes.push(cliente);
    alert("Bienvenido a nuestro sitio web");
    console.log(arrayClientes);
}

function iniciarSecion(){
    let nombre= prompt("ingrese su nombre completo:");
    let contraseña = parseInt(prompt("ingrese su contraseña "));
    let cliente = arrayClientes.find (cliente => cliente.contraseña === contraseña);
    
    if(contraseña === cliente){
    let indice = arrayClientes.indexOf(cliente);
    arayClientes.splice(indice, 1);
    console.log(arrayClientes) 
    alert("Bienvenido/a!"+nombre);
    
    } 
    else(contraseña !== cliente)
    {
        alert("La contraseña es incorrecta");
    }
}

function buscarComida(){
    let comida = prompt("Que desea comer ?");
    let cliente = arrayClientes.find (cliente => cliente.comida === comida);
    let indice = arrayClientes.indexOf(cliente);
    console.log(arrayClientes) 

    class Productos {
    constructor(nombre, precio, url){
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
    }
}

const hamburguesa = new Producto("Hamburguesa con cheddar",1000,"img/concheddar.jpeg" );
const hamburguesaSimple = new Producto("Hamburguesa Simple",600,"img/simple.jpeg" );
const pizza = new Producto("Pizza",1200,"img/pizza.jpeg" );
const lasaña = new Producto("Lasaña",900,"img/lasaña.jpeg" );
const picada = new Producto("Picada",2000,"img/picada.jpg" );

const arrayProductos = [hamburguesa, hamburguesaSimple, pizza, lasaña, picada];

const productos = document.getElementById("prodcutos");

arrayProductos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "caja";
    div.innerHTML = `<p class = "titulo">Nombre: ${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <img class = "comidita" src ="${producto.url}">
                    <button>Me lo llevo</button>`;
                    
                    productos.appendChild(div);
                               
})
}



function salir(){
    alert("gracias por utilizar nuestros servicios");

}
let opcion = menu();

switch(opcion){
    case 1:
        crearUsuario();
        break;
    case 2:
        iniciarSecion();
        break;
    case 3:
        buscarComida();
        break;
    case 4:
        salir();
        break;
    default:
        alert("opcion invalida, intente nuevamente");
        break;

}