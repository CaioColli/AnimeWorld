import { fetchApi } from './request.js'

export async function fetchMangasGenres() {
    try {
        const data = await fetchApi('genres/manga')
        return data
    } catch (error) {
        console.error('Erro ao buscar os gêneros', error)
    }
}