import { allAnimesButtons, allAnimesSlide } from './allAnimesDom.js'
import { initGenreFilterButton } from './animesFilteredDom.js'
import { renderAllAnimes } from './renderAllAnimes.js'
import { loadAnimesGenres } from './renderAnimesFiltered.js'

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