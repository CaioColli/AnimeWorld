import { renderSearchResult } from '../render/searchResult.js'
import { fetchApi } from '../services/request.js'

export function searchItem() {
    const searchInput = document.querySelector('#search-input')

    searchInput.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            const query = event.target.value.trim()

            if (query) {
                const animeResults = await searchAnimes(query)
                const mangaResults = await searchMangas(query)

                const animesFind = [...animeResults]

                if (animesFind.length > 0) {
                    renderSearchResult(animesFind)
                } else {
                    renderSearchResult('Nada encontrado')
                }
            } else {
                console.log('Criar função de limpar resultados')
            }
        }
    })

    async function searchAnimes(query) {
        const response = await fetchApi('anime', null, query)

        if (response && Array.isArray(response)) {
            console.table(response)
            return response
        } else {
            console.error('Nenhum resultado encontrado')
            return []
        }
    }

    async function searchMangas(query) {
        const response = await fetchApi('manga', null, query)

        if (response && Array.isArray(response)) {
            console.table(response)
            return response
        } else {
            console.error('Nenhum resultado encontrado')
            return []
        }
    }

    function clearSearchResults() {
        const list = document.querySelector('#search-result-list')
        list.innerHTML = ''
    }
}