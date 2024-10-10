import { fetchApi } from './request.js'

export async function fetchAnimesRecommendation() {
    const response = await fetchApi('recommendations/anime')

    if (response && Array.isArray(response)) {
        const mangas = response.slice(0, 3)
        console.log(mangas)
    } else {
        console.error('Nenhuma recomendação de anime encontrada.')
    }
}