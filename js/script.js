window.addEventListener('DOMContentLoaded', () => {

    const musicaAmbiente = new Audio('./sonidos/ambiente.mp3');
    const motorEncendido = new Audio('./sonidos/motor-medio.mp3');
    const motorIniciado = new Audio('./sonidos/motor-inciado-completamente.mp3')
    

    /* Click del paso 1 al paso 2 */
    let botonPaso1 = document.querySelector('#paso1 img')

    botonPaso1.addEventListener('click', () => {
        musicaAmbiente.play();
        musicaAmbiente.loop =true;
        musicaAmbiente.volume=0.1;
        document.querySelector('#paso1').classList.remove('visible')
        document.querySelector('#paso1').classList.add('hidden')
        document.querySelector('#paso2').classList.remove('hidden')
        document.querySelector('#paso2').classList.add('visible')

    })

    /* Click del paso 2 al paso 3 */
    let botonPaso2 = document.querySelector('#botonpaso2')

    botonPaso2.addEventListener('click', () => {
        document.querySelector('#paso2').classList.remove('visible')
        document.querySelector('#paso2').classList.add('hidden')
        document.querySelector('#paso3').classList.remove('hidden')
        document.querySelector('#paso3').classList.add('visible')
    })

    /* Click del paso 3 al paso 4 */
    let botonPaso3 = document.querySelector('#paso3 .colum-derecha-image-instrucciones-button')

    botonPaso3.addEventListener('click', () => {

        document.querySelector('#paso3').classList.remove('visible')
        document.querySelector('#paso3').classList.add('hidden')
        document.querySelector('#paso4').classList.remove('hidden')
        document.querySelector('#paso4').classList.add('visible')

    })

    /* Paso 4*/

    let botonPlaneacion = document.querySelector('.button-planeacion')
    let botonInvestigacion = document.querySelector('.button-investigacion')
    let validadorPaso4 = 0

    botonPlaneacion.addEventListener('click', () => {
        botonPlaneacion.classList.add('active')
        validadorPaso4 = 1
    })

    botonInvestigacion.addEventListener('click', () => {
        if (validadorPaso4 == 0) {
            //no sucede nada
        }
        else {
            botonInvestigacion.classList.add('active')
            document.querySelector('#paso4').classList.remove('visible')
            document.querySelector('#paso4').classList.add('hidden')
            document.querySelector('#paso5').classList.remove('hidden')
            document.querySelector('#paso5').classList.add('visible')
            motorEncendido.play()
            motorEncendido.volume=1;
        }

    })

    /* Paso 5*/

    let botonOrganizacion = document.querySelector('.button-organizacion')
    let botonDivision = document.querySelector('.button-division')
    let validadorPaso5 = 0

    botonOrganizacion.addEventListener('click', () => {
        botonOrganizacion.classList.add('active')
        validadorPaso5 = 1
    })


    botonDivision.addEventListener('click', () => {
        if (validadorPaso5 == 0) {
            //no se ha dado click, por ende no sucede nada
        }
        else {
            botonDivision.classList.add('active')
            document.querySelector('#paso5').classList.remove('visible')
            document.querySelector('#paso5').classList.add('hidden')
            document.querySelector('#paso6').classList.remove('hidden')
            document.querySelector('#paso6').classList.add('visible')
            motorEncendido.play()
            motorEncendido.volume=1;
        }
    })

    /* Paso 6 */

    let botonDireccion = document.querySelector('.button-direccion')
    let botonEjecucion = document.querySelector('.button-ejecucion')
    let validadorPaso6 = 0

    botonDireccion.addEventListener('click', () => {
        botonDireccion.classList.add('active')
        validadorPaso6 = 1
    })

    botonEjecucion.addEventListener('click', () => {
        if (validadorPaso6 == 0) {
            //no se ha dado click, por ende no sucede nada
        }
        else {
            botonEjecucion.classList.add('active')
            document.querySelector('#paso6').classList.remove('visible')
            document.querySelector('#paso6').classList.add('hidden')
            document.querySelector('#paso7').classList.remove('hidden')
            document.querySelector('#paso7').classList.add('visible')
            motorEncendido.play()
            motorEncendido.volume=1;
        }
    })

    /* Paso 7 al 8 y 9  */

    let botonControl = document.querySelector('.button-control')
    let botonEvaluacion = document.querySelector('.button-evaluacion')
    let validadorPaso7 = 0

    botonControl.addEventListener('click', () => {
        botonControl.classList.add('active')
        validadorPaso7 = 1
    })

    botonEvaluacion.addEventListener('click', () => {
        if (validadorPaso7 == 0) {
            //no se ha dado click, por ende no sucede nada
        }
        else {
            botonEvaluacion.classList.add('active')
            document.querySelector('#paso7').classList.remove('visible')
            document.querySelector('#paso7').classList.add('hidden')
            document.querySelector('#paso8').classList.remove('hidden')
            document.querySelector('#paso8').classList.add('visible')
            motorIniciado.play()
            document.querySelector('#paso8').classList.remove('visible')
            document.querySelector('#paso8').classList.add('hidden')
            document.querySelector('#paso9').classList.remove('hidden')
            document.querySelector('#paso9').classList.add('visible')

            setTimeout( () => {
                motorIniciado.pause()
                document.querySelector('#paso9').classList.remove('visible')
                document.querySelector('#paso9').classList.add('hidden')
                document.querySelector('#paso10').classList.remove('hidden')
                document.querySelector('#paso10').classList.add('visible')
            }, 1000)
        }
    })

})


