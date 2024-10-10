import { fetchApi } from './request.js'

export async function fetchMangaRecommendation() {
    const response = await fetchApi('recommendations/manga')

    if (response && Array.isArray(response)) {
        const mangas = response.slice(0, 3)
        console.log(mangas)
    } else {
        console.error('Nenhuma recomendação de mangá encontrada.')
    }
}