import { animesRecommendationsDOM } from './templates/animesRecommendations/animesRecommendationsDom.js'
import { mangasRecommendationsDOM } from './templates/mangasRecommendations/mangasRecommendationsDom.js'
//
import { popularAnimesDOM } from './templates/popularAnimes/popularAnimesDom.js'
import { popularMangasDOM } from './templates/popularMangas/popularMangasDom.js'
import { searchItem } from './templates/searchedAnimes/searchItem.js'
import { renderAnimesRecommendationsList } from './templates/animesRecommendations/renderAnimesRecommendations.js'
import { renderMangasRecommendationList } from './templates/mangasRecommendations/renderMangasRecommendations.js'
import { renderPopularMangasList } from './templates/popularMangas/renderPopularMangas.js'
import { renderPopularAnimesList } from './templates/popularAnimes/renderPopularAnimes.js'

(async function init() {
    const loader = document.querySelector('#loader')
    const initialPageApiContent = document.querySelector('#initial-page-content')

    initialPageApiContent.style.display = 'none'

    await renderAnimesRecommendationsList()
    await renderMangasRecommendationList()
    await renderPopularAnimesList()
    await renderPopularMangasList()
    await searchItem()
    //
    popularAnimesDOM()
    popularMangasDOM()
    animesRecommendationsDOM()
    mangasRecommendationsDOM()

    loader.style.display = 'none'
    initialPageApiContent.style.display = 'flex'
})()