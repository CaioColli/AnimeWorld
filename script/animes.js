import { animesDOM } from './dom/animes.js'
import { renderAnimes } from './render/animes.js'

(async function init() {
    const loadingOverlay = document.querySelector('#overlay')   

    loadingOverlay.style.display = 'flex'

    await renderAnimes()
    animesDOM()

    loadingOverlay.style.display = 'none'
})()