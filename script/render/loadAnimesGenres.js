import { fetchAnimesGenres } from '../services/animesGenre.js'

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
}