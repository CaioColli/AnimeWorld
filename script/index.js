import { popularAnimesDOM } from './dom/popularAnimes.js'
import { searchItem } from './dom/searchItem.js'
import { renderPopularAnimesList } from './render/popularAnimes.js'

(async function init() {
    const loader = document.querySelector('#loader')
    
    await renderPopularAnimesList()
    await searchItem()
    popularAnimesDOM()

    loader.style.display = 'none'
})()