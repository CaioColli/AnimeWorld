import { allAnimesButtons } from './allAnimesDom.js'
import { selectedGenresForPagination } from './animesFilteredDom.js'
import { fetchAnimesByPage } from '../../../script/services/animeRequest.js'
import { generateInformations } from '../../../script/utils/renderHelpers.js'
import { fetchAnimesByGenre } from './renderAnimesFiltered.js'

export let currentPage = 1

export async function renderAllAnimes(filteredAnimes = null) {
    const list = document.querySelector('#animes-list')
    list.innerHTML = ''

    const animes = filteredAnimes || await fetchAnimesByPage(currentPage)

    if (animes.length === 0) {
        console.error('Nenhum anime encontrado')
        return
    }

    animes.forEach(anime => {
        const {
            imageInfo,
            titleInfo,
        } = generateInformations({
            image: anime.images.jpg.large_image_url,
            title: anime.title,
        })

        //page\dynamicPage\index.html
        const card = `
            <li class="list-item" id="animes-item" data-id='${anime.mal_id}'>
                <a href='/page/dynamicPage/index.html?type=anime&id=${anime.mal_id}' target="_blank">
                    <div class="card">
                        <div class="card-content">
                            ${imageInfo}
                        </div>
                        <div class="card-description">
                            ${titleInfo}
                        </div>
                    </div>
                </a>
            </li>
        `

        list.innerHTML += card
    })
}

export async function renderPageCurrent() {
    const currentValue = document.querySelector('#current-page-animes')
    currentValue.textContent = currentPage
}

export async function loadNextPage() {
    currentPage++
    if (selectedGenresForPagination.length > 0) {
        const genresString = selectedGenresForPagination.join(',')
        const animes = await fetchAnimesByGenre(genresString, currentPage)
        await renderAllAnimes(animes)
    } else {
        await renderAllAnimes()
    }
    await renderPageCurrent()
    allAnimesButtons()
}

export async function loadPrevPage() {
    if (currentPage > 1) {
        currentPage--
        if (selectedGenresForPagination.length > 0) {
            const genresString = selectedGenresForPagination.join(',')
            const animes = await fetchAnimesByGenre(genresString, currentPage)
            await renderAllAnimes(animes)
        } else {
            await renderAllAnimes()
        }
        await renderPageCurrent()
        allAnimesButtons()
    }
}

export function resetCurrentPage() {
    currentPage = 1
}