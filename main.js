const productos = [
    {
        id: "001",
        nombre: "Pantalon Jean",
        precio: 9500,
        descripcion: "Pantalon Maxi Jean claro",
        stock: 10,
        urlImg: "https://i.ibb.co/c2ZZV1x/foto-1.jpg"
    },
    {
        id: "002",
        nombre: "Campera de Jean",
        precio: 9500,
        descripcion: "Campera de Jean",
        stock: 10,
        urlImg: "https://i.ibb.co/dM3sfW9/campera-jean.jpg"
    },
    {
        id: "003",
        nombre: "Remera Calaveras",
        precio: 9500,
        descripcion: "Remera Calaveras negra",
        stock: 10,
        urlImg: "https://i.ibb.co/K78h5hN/remera-gotica.jpg"
    },
    {
        id: "004",
        nombre: "Remera Ramones",
        precio: 9500,
        descripcion: "Remera Ramones negra",
        stock: 10,
        urlImg: "https://i.ibb.co/HVdysFW/remera-ramones.jpg"
    },
    {
        id: "005",
        nombre: "Campera de Cuero",
        precio: 9500,
        descripcion: "Campera de cuero entallada roja",
        stock: 10,
        urlImg: "https://i.ibb.co/jZWfbcB/campera-roja.jpg"
    },
    {
        id: "006",
        nombre: "Campera escosesa",
        precio: 9500,
        descripcion: "Campera escosesa roja y negra con puños",
        stock: 10,
        urlImg: "https://i.ibb.co/1vBYDQL/campera-escosesa.jpg"
    },
    {
        id: "007",
        nombre: "Campera Jean con Parches",
        precio: 9500,
        descripcion: "Campera Jean negra con Parches",
        stock: 10,
        urlImg: "https://i.ibb.co/LhmcVcz/Campera-con-parches.jpg"
    },
    {
        id: "008",
        nombre: "Pantalón Chupin ",
        precio: 9500,
        descripcion: "Pantalón chupin negro",
        stock: 10,
        urlImg: "https://i.ibb.co/yR1g0w0/pantalon-chupin.jpg"
    },
    {
        id: "009",
        nombre: "Remera Boca ",
        precio: 9500,
        descripcion: "Remera Boca Blanca",
        stock: 10,
        urlImg: "https://i.ibb.co/HVDZX5N/remera-labios.jpg"
    }
]

const contenedorTarjetas = document.querySelector("#contenedorTarjetas");

//Agrego al Carrito
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Muestro Tarjetas
const verProducto = () => {
    productos.forEach((producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta"
    tarjeta.innerHTML = `
                            <img src="${producto.urlImg}"alt="">
                            <div class="contenido">
                            <h3>${producto.nombre}</h3>
                            <p>${producto.descripcion}</p>
                            <span><b>Precio:</b>${producto.precio}$</span>
                            </div>
                            <form id="formCarrito${producto.id}">
                            <input name="id" type="hidden" value:${producto.id}>
                            <input name="cantidad" type="number" value="1" min="1" max="${producto.stock}">
                            <button id="${producto.id}"> Agregar al carriito </button>
                            </form>
                         `
    contenedorTarjetas.append(tarjeta);

    const botonCompra = document.getElementById(`${producto.id}`);
    botonCompra.addEventListener('click', agregarCarrito); 
})
}


const agregarCarrito = (e) => {
    e.preventDefault();
    const idProducto = e.target.id;
    console.log (idProducto);
    const formCarrito = document.querySelector("#formCarrito" + idProducto);
    const productoElegido = productos.find (p=> p.id === idProducto);
    console.log(formCarrito['cantidad'].value);
    console.log(productoElegido);
    const productoAlCarrito = {
        ...productoElegido,
        cantidad:parseInt(formCarrito['cantidad'].value) 
    }
    console.log (productoElegido);
    console.log (productoAlCarrito);

    carrito.push(productoAlCarrito);
    console.log(carrito);

    localStorage.setItem("carrito",JSON.stringify(carrito));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500      
          })
    }

    verProducto()
