let INDEX_PREGUNTA = 0

let puntaje = 0

CargarPregunta(INDEX_PREGUNTA)

function CargarPregunta(index){

    objetoPregunta = BaseDePreguntas[index]
    opciones = [...objetoPregunta.distractores]
    
    opciones.push(objetoPregunta.respuesta)

    opciones.sort(()=> Math.random()-0.5)

    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    if(objetoPregunta.imagen){

        document.getElementById("imagen").src = objetoPregunta.imagen
        document.getElementById("imagen").style.display = "";

    }else{

        document.getElementById("imagen").style.display = "none";

    }
    document.getElementById("opcion1").innerHTML = opciones[0]
    document.getElementById("opcion2").innerHTML = opciones[1]
    document.getElementById("opcion3").innerHTML = opciones[2]
    document.getElementById("opcion4").innerHTML = opciones[3]

}

 async function seleccionarOpcion(index){

    let validar = opciones[index] == objetoPregunta.respuesta;

    if(validar){

        await Swal.fire({
 
            title: "respuesta correcta",
            text: "La respuesta ha sido correcta",
            icon: "success",

        });
        
        puntaje++
 
    }else{

    await Swal.fire({

        title: "respuesta incorrecta",
        text: `La respuesta correcta es "${objetoPregunta.respuesta}"`,
        icon: "error",

    });

    }

    INDEX_PREGUNTA++;

    
    if(INDEX_PREGUNTA >= BaseDePreguntas.length){

        await Swal.fire({

            title: "El juego ha terminado",
            text: `Tu puntaje fue ${puntaje}/${BaseDePreguntas.length}`,

        });

        INDEX_PREGUNTA = 0;
        puntaje = 0;

    }
    
    CargarPregunta(INDEX_PREGUNTA);

}

