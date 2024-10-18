import { currentPage, renderAllAnimes, renderPageCurrent, resetCurrentPage } from '../render/allAnimes.js'
import { fetchAnimesByGenre } from '../render/loadAnimesGenres.js'

export let selectedGenresForPagination = []

export function getSelectedGenres() {
    const checkedGenres = Array.from(document.querySelectorAll('#all-anime-filter-items input[type="checkbox"]:checked')).map(checkbox => checkbox.id.split('-')[1])
    return checkedGenres
}

export async function applyGenreFilters() {
    const loadingOverlay = document.querySelector('#overlay')
    loadingOverlay.style.display = 'flex'

    const selectedGenres = getSelectedGenres()

    if (selectedGenres.length > 0) {
        const genresString = selectedGenres.join(',')

        resetCurrentPage()

        selectedGenresForPagination = selectedGenres

        const animes = await fetchAnimesByGenre(genresString, currentPage)
        await renderAllAnimes(animes)
    } else {
        selectedGenresForPagination = []
        await renderAllAnimes()
    }

    await renderPageCurrent()
    loadingOverlay.style.display = 'none'
}

export function initGenreFilterButton() {
    const button = document.querySelector('#apply-filters-button')

    const toggleButtonState = () => {
        const selectedGenres = getSelectedGenres()
        button.disabled = selectedGenres.length < 1

        if (button.disabled) {
            button.classList.add('disabled')
        } else {
            button.classList.remove('disabled')
        }
    }

    document.querySelectorAll('#all-anime-filter-items input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', toggleButtonState)// Atualiza o estado do botao quando algum checkbox muda
    })

    toggleButtonState()

    if (button) {
        button.addEventListener('click', applyGenreFilters)
    }
}
