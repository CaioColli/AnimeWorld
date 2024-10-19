import { allMangasButton, allMangasSlide } from './allMangasDom.js'
import { initGenreFilterButton } from './mangasFilteredDom.js'
import { renderAllMangas } from './renderAllMangas.js'
import { loadMangasGenres } from './renderMangasFiltered.js'

(async function init() {
    const loadingOverlay = document.querySelector('#overlay')
    const pageContainer = document.querySelector('#all-mangas-container')

    loadingOverlay.style.display = 'flex'
    await renderAllMangas()
    pageContainer.style.display = 'flex'
    allMangasButton()
    
    await loadMangasGenres()
    initGenreFilterButton()
    allMangasSlide()

    loadingOverlay.style.display = 'none'
})()