// NER GAMES STORE - búsqueda, filtros y contacto por WhatsApp
// Número de contacto confirmado para la tienda.
const numeroWhatsapp = "5353959676";

const botonGeneral = document.getElementById("whatsapp-general");
if (botonGeneral) {
  const mensajeGeneral = "Hola, quiero información sobre los productos de NER GAMES STORE.";
  botonGeneral.href = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensajeGeneral)}`;
}

const buscador = document.getElementById("busqueda");
const botonesFiltro = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".producto");
const mensajeSinResultados = document.getElementById("sin-resultados");
let categoriaActiva = "todos";

function actualizarCatalogo() {
  const termino = (buscador?.value || "").trim().toLocaleLowerCase("es");
  let visibles = 0;

  productos.forEach((producto) => {
    const coincideCategoria = categoriaActiva === "todos" || producto.dataset.categoria === categoriaActiva;
    const coincideTexto = producto.textContent.toLocaleLowerCase("es").includes(termino);
    const mostrar = coincideCategoria && coincideTexto;
    producto.hidden = !mostrar;
    if (mostrar) visibles++;
  });

  if (mensajeSinResultados) mensajeSinResultados.hidden = visibles !== 0;
}

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    categoriaActiva = boton.dataset.categoria || "todos";
    botonesFiltro.forEach((otro) => otro.classList.toggle("activo", otro === boton));
    actualizarCatalogo();
  });
});

buscador?.addEventListener("input", actualizarCatalogo);

document.querySelectorAll("[data-ir-categoria]").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    categoriaActiva = enlace.dataset.irCategoria;
    botonesFiltro.forEach((boton) => boton.classList.toggle("activo", boton.dataset.categoria === categoriaActiva));
    actualizarCatalogo();
  });
});

document.querySelectorAll(".comprar").forEach((boton) => {
  boton.addEventListener("click", (evento) => {
    evento.preventDefault();
    const producto = boton.dataset.producto || "un producto";
    const mensaje = `Hola, estoy interesado en este producto: ${producto}. ¿Está disponible?`;
    const enlace = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(enlace, "_blank", "noopener,noreferrer");
  });
});
