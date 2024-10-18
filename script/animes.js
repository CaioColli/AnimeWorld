import { animesDOM } from './dom/animes.js'
import { renderAnimes } from './render/animes.js'
import { loadAnimesGenres } from './render/loadAnimesGenres.js'
import { fetchAnimesGenres } from './services/animesGenre.js'

(async function init() {
    const loadingOverlay = document.querySelector('#overlay')   

    loadingOverlay.style.display = 'flex'

    await renderAnimes()
    await loadAnimesGenres()
    animesDOM()

    loadingOverlay.style.display = 'none'
})()