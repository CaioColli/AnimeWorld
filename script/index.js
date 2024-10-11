import { popularAnimesDOM } from './dom/popularAnimes.js'
import { searchItem } from './dom/searchItem.js'
import { renderPopularAnimesList } from './render/popularAnimes.js'

(async function init() {
    const loader = document.querySelector('#loader')
    const principalSection = document.querySelector('#principal-section')
    
    loader.style.display = 'flex'
    
    await renderPopularAnimesList()
    await searchItem()
    popularAnimesDOM()

    loader.style.display = 'none'
    principalSection.classList.remove('hidden')
})()