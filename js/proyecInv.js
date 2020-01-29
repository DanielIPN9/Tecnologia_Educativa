const proyectosI = [{
        nombre_proyecto: "Proyecto 1",
        tipo_proyecto: "Investigación",
        descripcion_proyecto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, repudiandae itaque quia aliquid sequi, molestias architecto libero molestiae nemo dolorem eum obcaecati. Possimus, dignissimos molestias. Molestiae qui laborum ut id!"

    },

    {
        nombre_proyecto: "Proyecto 2",
        tipo_proyecto: "Desarrollo",
        descripcion_proyecto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, repudiandae itaque quia aliquid sequi, molestias architecto libero molestiae nemo dolorem eum obcaecati. Possimus, dignissimos molestias. Molestiae qui laborum ut id!"
    },

    {
        nombre_proyecto: "Proyecto 3",
        tipo_proyecto: "Educativo",
        descripcion_proyecto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, repudiandae itaque quia aliquid sequi, molestias architecto libero molestiae nemo dolorem eum obcaecati. "

    },

    {
        nombre_proyecto: "Sistema de deteccion de fugas de agua para una red hidráulica doméstica",
        tipo_proyecto: "Investigación",
        descripcion_proyecto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, repudiandae itaque quia aliquid sequi, molestias architecto libero molestiae nemo dolorem eum obcaecati. Possimus, dignissimos molestias. Molestiae qui laborum ut id!"

    },
];


function proyecTempplate(data) {

    return `
    <div class="proyecto contenido">
        <h4>${data.nombre_proyecto}</h4>
        <div class="contenido-proyecto">
            <div class="">
                <p><u>Tipo de proyecto:</u> ${data.tipo_proyecto}</p>
            </div>
            <div class="contenido">
                <p>${data.descripcion_proyecto}</p>
            </div>
        </div>
    </div>

    `
}


document.getElementById("infoProyectos").innerHTML = `
${proyectosI.map(proyecTempplate).join('')}
`