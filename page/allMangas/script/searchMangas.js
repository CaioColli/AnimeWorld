import { fetchApi } from '../../../script/services/request.js'
import { renderMangaSearchResult } from '../../../templates/searchedMangas/renderSearchedMangas.js'

export function searchManga() {
    const searchInput = document.querySelector('#search-mangas-input')
    const searchResultSection = document.querySelector('#mangas-search-result-section')
    const principalContent = document.querySelector('#all-mangas-container')
    const loadingOverlay = document.querySelector('#overlay')

    searchInput.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            const query = event.target.value.trim()

            loadingOverlay.style.display = 'flex'

            if (query) {
                const mangasResults = await searchMangas(query)

                if (mangasResults.length > 0) {
                    renderMangaSearchResult(mangasResults)

                    principalContent.style.display = 'none'
                    searchResultSection.style.display = 'flex'
                    loadingOverlay.style.display = 'none'
                } else {
                    alert('Nada encontrado')
                }
            }
        }
    })

    async function searchMangas(query) {
        const response = await fetchApi('manga', null, query)

        if (response && Array.isArray(response)) {
            return response
        } else {
            console.error('Nenhum resultado encontrado')
            return []
        }
    }
}

