const recursos = [{
        nombreArchivo: "Horarios y Salones",
        url: "recursos/AulasLab_2020_2 060120.pdf",
        descripcion: "PDF de los horarios y salones del semestre 2020/2"
    },

    {
        nombreArchivo: "Imagen de prueba",
        url: "recursos/DANI BLANCO.png",
        descripcion: "Imágen de prueba para descarga"
    },

];


const enlaces = [{
        servidor: "Drive",
        nombreEnlace: "Carpeta Servicio social",
        urlEnlace: "https://drive.google.com/open?id=1pZPL2n6ycpeYhXbdBt_SDkA902gzsrrw"
    },

    {
        servidor: "DropBox",
        nombreEnlace: "Ejemplo vista enlaces",
        urlEnlace: "#"
    },

];

function recursosTemplate(data) {
    return `
    <div class="enlace-descarga">
        <ol id="lista3">
            <li><a href="${data.url}" download="${data.nombreArchivo}"> ${data.nombreArchivo}</a>
            <p>${data.descripcion}</p>
            </li>
        </ol>
    </div>

    <div>
    </div>
    `
}

function enlacesTemplate(data) {
    return `
    <div class="fondo-enlacesE">
        <div>
            <p class="fw-900">${data.servidor}</p>
        </div>
        <div class="enlace-descarga">
            <a href="${data.urlEnlace}" target="_blank">${data.nombreEnlace}</a>
        </div>     
    </div>
    
    `
}

document.getElementById("recu").innerHTML = `
<h4>Enlaces para descarga de archivos</h4>
    ${recursos.map(recursosTemplate).join('')}
<h4>Enlaces externos </h4>
    ${enlaces.map(enlacesTemplate).join('')}
`;