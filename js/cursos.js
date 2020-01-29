const cursos = [{
        nombre: "Base de Datos Distribuidas",
        grupo: "3TM3",
        horario: ["8:30-10:00", "8:30-10:00", "8:30-10:00"],
        dia: ["Lunes", "Miércoles", "Viernes"],
        ubicacion: ["Lab. de Telemática II", "Lab. de Telemática II", "Lab. de Telemática II"],
        img: "img/base_de_datos_dis_C.jpg"
    },
    {
        nombre: "Base de Datos Distribuidas",
        grupo: "3TV4",
        horario: ["14:30-16:00", "14:30-16:00", "14:30-16:00"],
        dia: ["Lunes", "Martes", "Viernes"],
        ubicacion: ["Lab. de Telemática II", "Lab. de Telemática II", "Lab. de Telemática I"],
        img: "img/base_de_datos_dis_C.jpg"
    },

];

const semestre = {
    cilo: "2020/2",
    periodo: "Enero - Julio"
}

function genHorario() {

    return `
    Horario
    <table id="Table">
    
    </table>
    `;
}

function cursoTemplate(data) {
    return `
    
    <div class="contenido-curso marco">

        <div class= "image-curso">
            <img   src="${data.img}" alt="ImagenCuros">
        </div>
        <div class="contenido-centrado">
            <p class="titulo-grupo centrar-texto">${data.nombre} - ${data.grupo}</p>
            
            <h5>Horario</h5>
            <div class="contenido-horarios marco-horario">
            
                <div class="seccion-data">
                    ${data.dia.map(valor => `<p> ${valor}</p>`).join('')}
                </div>
                <div class="seccion-data">
                    ${data.horario.map(valor => `<p> ${valor}</p>`).join('')}
                </div>
                
                <div class="seccion-data">
                    ${data.ubicacion.map(valor => `<p> ${valor}</p>`).join('')}
                </div>
            </div>

        </div>

    </div> 
     `;
}

document.getElementById("infoC").innerHTML = `
<h4>Cursos del semestre ${semestre.cilo} del periodo ${semestre.periodo}</h4>
${cursos.map(cursoTemplate).join('')}
`;