import { fetchApi } from './request.js'

export async function fetchPopularManga() {
    const response = await fetchApi('top/manga')

    if (response && Array.isArray(response)) {
        const mangas = response.slice(0, 6)
        console.log(mangas)
    } else {
        console.error('Nenhum mangá encontrado.')
    }
}

export async function fetchMangaByName(name) {
    const manga = await fetchApi('manga', null, name)
    console.log(manga)
}
