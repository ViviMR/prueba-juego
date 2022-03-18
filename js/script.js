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

    /* Click del paso 4 al paso 4-1 */

    let botonPaso4 =document.querySelector('#paso.4 ')

})