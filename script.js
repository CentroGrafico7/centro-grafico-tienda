let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert(producto + ' agregado al carrito');
}

window.onload = function () {
  if (document.getElementById('carrito')) {
    const contenedor = document.getElementById('carrito');
    const totalTag = document.getElementById('total');
    contenedor.innerHTML = '';
    let total = 0;
    carrito.forEach(item => {
      contenedor.innerHTML += `<p>${item.producto} - $${item.precio}.00 MXN</p>`;
      total += item.precio;
    });
    totalTag.innerText = 'Total: $' + total + '.00 MXN';
  }
};