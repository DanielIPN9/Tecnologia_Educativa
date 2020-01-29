const colaboradores = [{
        nombre: "Colaborador 1",
        correo: "correo1@ext.com",
        institucion: "IPN",
        imagen: "img_perfiles/contacto_imagen.png"
    },

    {
        nombre: "Colaborador 2",
        correo: "correo2@ext.com",
        institucion: "IPN",
        imagen: "img_perfiles/contacto_imagen.png"
    },

    {
        nombre: "Colaborador 3",
        correo: "correo3@ext.com",
        institucion: "UNAM",
        imagen: "img_perfiles/contacto_imagen.png"
    },

    {
        nombre: "Colaborador 4",
        correo: "correo4@ext.com",
        institucion: "UNAM",
        imagen: "img_perfiles/contacto_imagen.png"
    },
];


function colabTemplate(data) {
    return `

    <div class="caja-perfil cuerpo-perfil">
        <div class="imagen-perfil">
            <img src="${data.imagen}" alt="imagen-perfil">
        </div>

        <div class="info-perfil">
           <p> Colaborador: ${data.nombre}</p>
           <p> Correo: ${data.correo}</p>
           <p>Institución: ${data.institucion}</p>
        </div>
    </div>

`
}

document.getElementById("infoColab").innerHTML = `
${colaboradores.map(colabTemplate).join('')}
`