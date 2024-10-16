import { animesRecommendationsDOM } from './dom/animesRecommendations.js'
import { mangasRecommendationsDOM } from './dom/mangasRecommendations.js'
import { popularAnimesDOM } from './dom/popularAnimes.js'
import { popularMangasDOM } from './dom/popularMangas.js'
import { searchItem } from './dom/searchItem.js'
import { renderAnimesRecommendationsList } from './render/animesRecommendations.js'
import { renderMangasRecommendationList } from './render/mangasRecommendations.js'
import { renderPopularAnimesList } from './render/popularAnimes.js'
import { renderPopularMangasList } from './render/PopularManga.js'

(async function init() {
    const loader = document.querySelector('#loader')
    const initialPageApiContent = document.querySelector('#initial-page-content')

    initialPageApiContent.style.display = 'none'

    await renderAnimesRecommendationsList()
    await renderMangasRecommendationList()
    await renderPopularAnimesList()
    await renderPopularMangasList()
    await searchItem()
    popularAnimesDOM()
    popularMangasDOM()
    animesRecommendationsDOM()
    mangasRecommendationsDOM()

    loader.style.display = 'none'
    initialPageApiContent.style.display = 'flex'
})()