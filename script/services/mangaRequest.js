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

export async function fetchMangasByPage(page) {
    try {
        const data = await fetchApi(`manga?page=${page}`)
        return data
    } catch (error) {
        console.error('Erro ao buscar os mangás', error)
        return []
    }
}

export async function fetchMangaById(id) {
    try {
        const data = await fetchApi('manga', id, 'full')
        return data
    } catch (error) {
        console.error('Erro ao buscar o mangá', error)
    }
}
