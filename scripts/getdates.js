// Obtener el año actual para los derechos de autor
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Obtener la fecha de la última modificación del documento
const lastModified = document.lastModified;
document.getElementById("modifiedDate").textContent = lastModified;
