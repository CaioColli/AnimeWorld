import { popularAnimesDOM } from './dom/popularAnimes.js'
import { searchItem } from './dom/searchItem.js'
import { renderPopularAnimesList } from './render/popularAnimes.js'
import { fetchAnimeByName } from './services/animeRequest.js'
import { fetchMangaByName } from './services/mangaRequest.js'

(async function init() {
    const loader = document.querySelector('#loader')
    
    await renderPopularAnimesList()
    await searchItem()
    popularAnimesDOM()
    //fetchMangaByName('Naruto')
    fetchAnimeByName('Naruto')

    loader.style.display = 'none'
})()