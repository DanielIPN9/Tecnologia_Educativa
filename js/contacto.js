const contacto = {

    profesor: "Carlos de la Cruz Sosa",
    grado: "M. en C.",
    departamento: "Jefe de Lab. de Telemática II",
    horarioAtencion: "En",
    correo: "cdelacruzupiita@gmail.com"
};

document.getElementById("datosP").innerHTML = `
<p>${contacto.grado} ${contacto.profesor}</p>
<p>${contacto.departamento}</p>
<p>Horario de atención: ${contacto.horarioAtencion}</p>
<p>Correo electronio: ${contacto.correo}</p>
`