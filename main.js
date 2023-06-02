const productos = [
    {
        id: "producto0001",
        nombre: "Pantalon Jean",
        descripcion: "Pantalon Maxi Jean claro",
        stock: 10,
    },
    {
        id: "producto0002",
        nombre: "Campera de Jean",
        descripcion: "Campera de Jean",
        stock: 10,
    },
    {
        id: "producto0003",
        nombre: "Remera Calaveras",
        descripcion: "Remera Calaveras negra",
        stock: 10,
    },
    {
        id: "producto0004",
        nombre: "Remera Ramones",
        descripcion: "Remera Ramones negra",
        stock: 10,
    },
    {
        id: "producto0005",
        nombre: "Campera de Cuero",
        descripcion: "Campera de cuero entallada roja",
        stock: 10,
    },
    {
        id: "producto0006",
        nombre: "Campera escosesa",
        descripcion: "Campera escosesa roja y negra con puños",
        stock: 10,
    },
]

const carrito = []
let cantidadTotal = 0

productos.forEach((producto, index) =>{
    const agregarAlCarrito = document.querySelector(`#${producto.id}`)
    agregarAlCarrito.addEventListener("submit", (e) => {
        e.preventDefault()
        const cantidad = parseInt(e.target.children["cantidad"].value)
        carrito.push({
            id: productos[index].id,
            nombre: productos[index].nombre,
            descripcion: productos[index].descripcion,
            cantidad:cantidad
        })
        cantidadTotal = cantidadTotal + cantidad
        const numeroCarrito = document.querySelector("#numeroCarrito")
        console.log(numeroCarrito)
        numeroCarrito.innerText =cantidadTotal
        console.log(carrito)
        console.log(agregarAlCarrito.id)
        console.log(cantidadTotal)

    })
})