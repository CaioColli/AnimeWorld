import { animesRecommendationsDOM } from './dom/animesRecommendations.js'
import { popularAnimesDOM } from './dom/popularAnimes.js'
import { searchItem } from './dom/searchItem.js'
import { renderAnimesRecommendationsList } from './render/animesRecommendations.js'
import { renderPopularAnimesList } from './render/popularAnimes.js'

(async function init() {
    const loader = document.querySelector('#loader')
    const initialPageApiContent = document.querySelector('#initial-page-content')

    initialPageApiContent.style.display = 'none'

    await renderAnimesRecommendationsList()
    await renderPopularAnimesList()
    await searchItem()
    popularAnimesDOM()
    animesRecommendationsDOM()

    loader.style.display = 'none'
    initialPageApiContent.style.display = 'flex'
})()