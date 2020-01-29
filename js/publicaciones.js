const pubicaciones = [

    {
        tituloP: "Inicio semestre",
        fechaP: "15/01/2020",
        descripcion: "Bienvenidos a un nuevo ciclo escolar"
    },

    {
        tituloP: "Examen primer parcial de telematica",
        fechaP: "dd/mm/aaaa",
        descripcion: "El examen de la materia será para el día DD/MM/AAAA, presentarse 5min antes."
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