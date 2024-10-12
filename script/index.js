import { popularAnimesDOM } from './dom/popularAnimes.js'
import { searchItem } from './dom/searchItem.js'
import { renderPopularAnimesList } from './render/popularAnimes.js'

(async function init() {
    const loader = document.querySelector('#loader')
    const initialPageApiContent = document.querySelector('#initial-page-api-content')

    initialPageApiContent.style.display = 'none'

    await renderPopularAnimesList()
    await searchItem()
    popularAnimesDOM()

    loader.style.display = 'none'
    initialPageApiContent.style.display = 'block'
})()