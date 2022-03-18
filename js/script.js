window.addEventListener('DOMContentLoaded', () => {
    /* Click del paso 1 al paso 2 */
    let botonPaso1 = document.querySelector('#paso1 img')

    botonPaso1.addEventListener('click', () => {

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
    let botonPaso3 = document.querySelector('#paso3 .colum-derecha-image-instrucciones-buttom')

    botonPaso3.addEventListener('click', () => {

        document.querySelector('#paso3').classList.remove('visible')
        document.querySelector('#paso3').classList.add('hidden')
        document.querySelector('#paso4').classList.remove('hidden')
        document.querySelector('#paso4').classList.add('visible')

    })

    /* Paso 4*/

    let botonPlaneacion = document.querySelector('.button-planeacion')
    let botonInvestigacion = document.querySelector('.buttom-investigacion')
    let validadorPaso4 = false

    botonPlaneacion.addEventListener('click', () => {
        botonPlaneacion.classList.add('active')
        validadorPaso4 = true
    })

    botonInvestigacion.addEventListener('click', () => {
        if (validadorPaso4 == false) {
            //no se hace nada
        }
        else {
            botonInvestigacion.classList.add('active')
            document.querySelector('#paso4').classList.remove('visible')
            document.querySelector('#paso4').classList.add('hidden')
            document.querySelector('#paso5').classList.remove('hidden')
            document.querySelector('#paso5').classList.add('visible')
        }

    })

})