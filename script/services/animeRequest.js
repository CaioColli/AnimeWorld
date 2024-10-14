import { fetchApi } from './request.js'

export async function fetchPopularAnimes() {
    const response = await fetchApi('top/anime')

    if (response && Array.isArray(response)) {
        const animes = response.slice(0, 6)
        return animes
    } else {
        console.error('Nenhum anime encontrado.')
        return []
    }
}

export async function fetchAnimeByName(name) {
    const anime = await fetchApi('anime', null, name)
}
