//CONFIGURACION DE WHATSAPP
const numeroWhatsapp = "533959676";
//BOTON GENRAL 
const botonGeneral = document.getElementById( "whatsapp-general");
if (botonGeneral) {
botonGeneral.href = "https://wa.me/* + numeroWhatsapp;
botonGeneral.target = "_blank";
}
//BOTONES DE PRODUCTOS
document.querySelectorAll (".comprar").forEach (boton => {
boton.addEventListener)"click", function(event) {
event.preventDefault();
const poducto = this.dataset.producto;
const mensaje = "Hola, estoy interesado en este producto: " + producto;
constelace = "https://wa.me/" + numeroWhatsapp + "?text)" + encoudeURIComponent(mensaje);
window.open(enlace, "_blank");
});
});