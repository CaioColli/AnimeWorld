import { renderAnimeSearchResult } from '../render/AnimeSearchResult.js'
import { renderMangaSearchResult } from '../render/mangaSearchResult.js'
import { fetchApi } from '../services/request.js'
import { searchedAnimesItemsDOM } from './searchedAnimesItems.js'
import { searchedMangasItemsDOM } from './searchedMangasItems.js'

export function searchItem() {
    const searchInput = document.querySelector('#search-input')
    const searchResultSection = document.querySelector('#search-result-section')
    const principalSection = document.querySelector('#principal-section')

    searchInput.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            const query = event.target.value.trim()

            if (query) {
                const animeResults = await searchAnimes(query)
                const mangaResults = await searchMangas(query)

                if (animeResults.length > 0 || mangaResults.length > 0) {
                    renderAnimeSearchResult(animeResults)
                    renderMangaSearchResult(mangaResults)

                    principalSection.style.display = 'none'
                    searchResultSection.style.display = 'flex'
                    
                    searchedAnimesItemsDOM()
                    searchedMangasItemsDOM()
                } else {
                    alert('Nada encontrado!')
                }
            } else {
                clearSearchResults()
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
        const list = document.querySelector('#search-animes-result-list')
        list.innerHTML = ''
    }
}