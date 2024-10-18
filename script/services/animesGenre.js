import { fetchApi } from './request.js'

export async function fetchAnimesGenres() {
    try {
        const data = await fetchApi('genres/anime')
        return data
    } catch (error) {
        console.error('Erro ao buscas os gêneros', error)
    }
}