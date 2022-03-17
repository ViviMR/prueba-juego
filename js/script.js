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
        document.querySelector('#paso3').classList.add('visible')
        document.querySelector('#paso3').classList.remove('hidden')
    })
})