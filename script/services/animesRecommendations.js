import { fetchApi } from './request.js'

export async function fetchAnimesRecommendations() {
    const response = await fetchApi('recommendations/anime')

    if (response && Array.isArray(response)) {
        const animes = response.slice(0, 6)
        console.table(animes)
        return animes
    } else {
        console.error('Nenhuma recomendação de anime encontrada.')
        return []
    }
}