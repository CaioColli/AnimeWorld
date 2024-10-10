import { popularAnimesDOM } from './dom/popularAnimes.js'
import { renderPopularAnimesList } from './render/popularAnimes.js'

(async function init() {
    const loader = document.querySelector('#loader')
    const principalSection = document.querySelector('#principal-section')
    
    loader.style.display = 'flex'
    
    await renderPopularAnimesList()
    popularAnimesDOM()

    loader.style.display = 'none'
    principalSection.classList.remove('hidden')
})()