import { resetCurrentPage } from '../../allAnimes/script/renderAllAnimes.js'
import { currentPage, renderAllMangas, renderPageCurrent } from './renderAllMangas.js'
import { fetchMangasByGenre } from './renderMangasFiltered.js'

export let selectedGenresForMangasPagination = []

export function getSelectedGenres() {
    const checkedGenres = Array.from(document.querySelectorAll('#all-mangas-filter-items input[type="checkbox"]:checked')).map(checkbox => checkbox.id.split('-')[1])
    return checkedGenres
}

export async function applyGenreFilters() {
    const loadingOverlay = document.querySelector('#overlay')
    loadingOverlay.style.display = 'flex'

    const selectedGenres = getSelectedGenres()

    if (selectedGenres.length > 0) {
        const genresString = selectedGenres.join(',')

        resetCurrentPage()

        selectedGenresForMangasPagination = selectedGenres

        const mangas = await fetchMangasByGenre(genresString, currentPage)
        await renderAllMangas(mangas)
    } else {
        selectedGenresForMangasPagination = []
        await renderAllMangas()
    }

    await renderPageCurrent()
    loadingOverlay.style.display = 'none'
}

export function initGenreFilterButton() {
    const button = document.querySelector('#apply-mangas-filters-button')

    const toggleButtonState = () => {
        const selectedGenres = getSelectedGenres()
        button.disabled = selectedGenres.length < 1

        if (button.disabled) {
            button.classList.add('disabled')
        } else {
            button.classList.remove('disabled')
        }
    }

    document.querySelectorAll('#all-mangas-filter-items input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', toggleButtonState)
    })

    toggleButtonState()

    if (button) {
        button.addEventListener('click', applyGenreFilters)
    }
}