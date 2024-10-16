import { allAnimesButtons, allAnimesSlide } from './dom/allAnimes.js'
import { renderAllAnimes, renderPageCurrent } from './render/allAnimes.js'
import { loadAnimesGenres } from './render/loadAnimesGenres.js'

(async function init() {
    const loadingOverlay = document.querySelector('#overlay')
    const pageContainer = document.querySelector('#all-animes-container')

    loadingOverlay.style.display = 'flex'
    await renderAllAnimes()
    pageContainer.style.display = 'flex'
    allAnimesButtons()
    
    await loadAnimesGenres()
    allAnimesSlide()

    loadingOverlay.style.display = 'none'
})()