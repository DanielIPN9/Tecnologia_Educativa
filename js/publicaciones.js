const pubicaciones = [

    {
        tituloP: "Página terminada",
        fechaP: "31/01/2020",
        descripcion: "Mensaje de prueba para despliegue en servidor con una conexión con GitHub"
    },

];


function publicacionTemplate(data) {
    return `
    <div class="cuerpor-publicacion">
        <div class="titulo-publicacion">
            <h4> ${data.tituloP}</h4>
            
        </div>

        <div class="fecha-publicacion">
            <p>Fecha de publicación:<em> ${data.fechaP}</em></p>
        </div>
    </div>

    <div class="contenido contenedor texto-publicacion">
        <p>${data.descripcion}</p>
    </div>
    `

}


document.getElementById("publicacion").innerHTML = `
${pubicaciones.map(publicacionTemplate).join('')}
`;