class Producto {
    constructor(prenda, talle, precio, stock) {
        this.prenda = prenda
        this.talle = talle
        this.precio = precio
        this.stock = stock
    }
}



const productos = []

const form = document.querySelector('#idForm')
const divProductos = document.querySelector('#divProductos')
const botonProductos = document.querySelector('#botonProductos')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let prenda = document.getElementById('idPrenda').value
    let talle = document.getElementById('idTalle').value
    let precio = parseFloat(document.getElementById('idPrecio').value)
    let stock = parseInt(document.getElementById('idStock').value)

    const producto = new Producto(prenda, talle, precio, stock)

    productos.push(producto)
    console.log(productos)

    form.reset()
})

document.querySelector('#botonProductos').addEventListener('click', () => {
    productos.forEach(producto => {
        divProductos.innerHTML +=   `
            <div class="card" style="widht: 18rem;margin:3px;">
                <div class="card-body">
                    <h5 class="card-title">Prenda: ${producto.prenda}</h5>
                    <p class="card-text">Talle: ${producto.talle}</p>
                    <p class="card-text">Precio: ${producto.precio}</p>
                    <p class="card-text">Stock disponible: ${producto.stock}</p>
                </div>
            </div>
        `        
    })
})