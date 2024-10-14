import { fetchApi } from './request.js'

export async function fetchPopularManga() {
    const response = await fetchApi('top/manga')

    if (response && Array.isArray(response)) {
        const mangas = response.slice(0, 6)
        return mangas
    } else {
        console.error('Nenhum mangá encontrado.')
        return []
    }
}