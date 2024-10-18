import { allAnimesButtons, allAnimesSlide } from './dom/allAnimes.js'
import { initGenreFilterButton } from './dom/animesGenres.js'
import { renderAllAnimes } from './render/allAnimes.js'
import { loadAnimesGenres } from './render/loadAnimesGenres.js'

(async function init() {
    const loadingOverlay = document.querySelector('#overlay')
    const pageContainer = document.querySelector('#all-animes-container')

    loadingOverlay.style.display = 'flex'
    await renderAllAnimes()
    pageContainer.style.display = 'flex'
    allAnimesButtons()
    
    await loadAnimesGenres()
    initGenreFilterButton()
    allAnimesSlide()

    loadingOverlay.style.display = 'none'
})()