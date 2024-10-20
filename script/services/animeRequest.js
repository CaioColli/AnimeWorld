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

export async function fetchAnimesByPage(page) {
    try {
        const data = await fetchApi(`anime?page=${page}`)
        return data
    } catch (error) {
        console.error('Erro ao buscar animes:', error)
        return []
    }
}

export async function fetchAnimeById(id) {
    try {
        const data = await fetchApi('anime', id, 'full')
        return data
    } catch (error) {
        console.error('Erro ao buscar o anime', error)
    }
}
