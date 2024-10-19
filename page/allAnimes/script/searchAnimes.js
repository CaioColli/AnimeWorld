import { fetchApi } from '../../../script/services/request.js'
import { renderAnimeSearchResult } from '../../../templates/searchedAnimes/renderSearchedAnimes.js'

export function searchAnime() {
    const searchInput = document.querySelector('#search-animes-input')
    const searchResultSection = document.querySelector('#animes-search-result-section')
    const principalContent = document.querySelector('#all-animes-container')
    const loadingOverlay = document.querySelector('#overlay')

    searchInput.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            const query = event.target.value.trim()

            loadingOverlay.style.display = 'flex'

            if (query) {
                const animesResults = await searchAnimes(query)

                principalContent.style.display = 'none'
                searchResultSection.style.display = 'flex'
                loadingOverlay.style.display = 'none'

                if (animesResults.length > 0) {
                    renderAnimeSearchResult(animesResults)

                    principalContent.style.display = 'none'
                    searchResultSection.style.display = 'flex'
                    loadingOverlay.style.display = 'none'
                } else {
                    alert('Nada encontrado')
                }
            }
        }
    })

    async function searchAnimes(query) {
        const response = await fetchApi('anime', null, query)

        if (response && Array.isArray(response)) {
            return response
        } else {
            console.error('Nenhum resultado encontrado')
            return []
        }
    }
}