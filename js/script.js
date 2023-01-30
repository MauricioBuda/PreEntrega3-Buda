const pintarProductos = () => {
    const contenedor = document.getElementById('contenedor_cards')

    productos_cards.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML += `
            <div class="card-image">
                <img src="${producto.img}">
                <span class="card-title">${producto.nombre}</span>
                <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id="${producto.id}" class="material-icons">add_shopping_cart</i></a>
            </div>
            <div class="card-content">
                <p>$${producto.precio}</p>
            </div>
        `
        contenedor.appendChild(div)
    })
};

pintarProductos()