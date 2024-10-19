import { fetchMangasByPage } from '../../../script/services/mangaRequest.js'
import { generateInformations } from '../../../script/utils/renderHelpers.js'
import { allMangasButton } from './allMangasDom.js'
import { selectedGenresForMangasPagination } from './mangasFilteredDom.js'
import { fetchMangasByGenre } from './renderMangasFiltered.js'

export let currentPage = 1

export async function renderAllMangas(filteredMangas = null) {
    const list = document.querySelector('#mangas-list')
    list.innerHTML = ''

    const mangas = filteredMangas || await fetchMangasByPage(currentPage)

    if (mangas.length === 0) {
        console.error('Nenhum mangá encontrado')
        return
    }

    mangas.forEach(manga => {
        const {
            imageInfo,
            titleInfo,
        } = generateInformations({
            image: manga.images.jpg.large_image_url,
            title: manga.title,
        })

        const card = `
            <li class="list-item" id="manga-item" data-id='${manga.mal_id}'>
                <a href='/page/dynamicPage/index.html?type=manga&id=${manga.mal_id}' target="_blank">
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
    const currentValue = document.querySelector('#current-page-mangas')
    currentValue.textContent = currentPage
}

export async function loadNextPage() {
    currentPage++
    if (selectedGenresForMangasPagination.length > 0) {
        const genresString = selectedGenresForMangasPagination.join(',')
        const mangas = await fetchMangasByGenre(genresString, currentPage)
        await renderAllMangas(mangas)
    } else {
        await renderAllMangas()
    }
    await renderPageCurrent()
    allMangasButton()
}

export async function loadPrevPage() {
    if (currentPage > 1) {
        currentPage--
        if (selectedGenresForMangasPagination.length > 0) {
            const genresString = selectedGenresForMangasPagination.join(',')
            const mangas = await fetchMangasByGenre(genresString, currentPage)
            await renderAllMangas(mangas)
        } else {
            await renderAllMangas()
        }
        await renderPageCurrent()
        allMangasButton()
    }
}