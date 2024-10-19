import { fetchMangasGenres } from '../../../script/services/mangasGenre.js'
import { fetchApi } from '../../../script/services/request.js'

export let selectedGenre = null

export async function loadMangasGenres() {
    const genres = await fetchMangasGenres()

    const filterContainer = document.querySelector('#all-mangas-filter-items')

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

export async function fetchMangasByGenre(genreId, page = 1) {
    return await fetchApi(`manga?genres=${genreId}&page=${page}`)
}