import { fetchAnimesGenres } from '../services/animesGenre.js'
import { fetchApi } from '../services/request.js'

let currentPage = 1

export async function loadAnimesGenres() {
    const genres = await fetchAnimesGenres()
    
    const filterContainer = document.getElementById('all-anime-filter-items')

    filterContainer.innerHTML = ''

    genres.forEach(genre => {
        const filter = `
            <div class="all-items-input-item">
                <label class="all-items-input-checkBox">
                    <input type="checkbox" id="genre-${genre.mal_id}" value="${genre.name}">
                    <div class="all-items-input-transition"></div>
                </label>
                <span class="all-items-input-label">${genre.name}</span>
            </div>
        `

        filterContainer.innerHTML += filter
    })

    // Dessa forma foi possivel exibir os animes do filtro a cada dois segundos
    // Sendo possivel exibir 25 animes por renderização

    const actionGenre = genres.find(genre => genre.name === 'Action')

    if (actionGenre) {
        const animes = await fetchAnimesByGenre(actionGenre.mal_id, currentPage)
        //console.log('Animes do tipo Action', animes)

        currentPage++

        setTimeout(async () => {
            const moreAnimes = await fetchAnimesByGenre(actionGenre.mal_id, currentPage)
            //console.log('Segunda página de animes do gênero Action', moreAnimes)
        }, 1000)
    }
}

async function fetchAnimesByGenre(genreId, page = 1) {
    return await fetchApi(`anime?genres=${genreId}&page=${page}`)
}