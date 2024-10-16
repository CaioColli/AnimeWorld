import {
    fetchPopularManga
} from '../services/mangaRequest.js'
import {
    generateInformations
} from '../utils/renderHelpers.js'

export async function renderPopularMangasList() {
    const mangas = await fetchPopularManga()

    const list = document.querySelector('#popular-mangas-list')

    mangas.forEach(manga => {
        const {
            authorInfo,
            chaptersInfo,
            episodesInfo,
            genresInfo,
            imageInfo,
            releaseYearInfo,
            titleInfo,
            volumesInfo
        } = generateInformations({
            authors: manga.authors,
            chapters: manga.chapters,
            episodes: manga.episodes,
            genres: manga.genres,
            image: manga.images.jpg.large_image_url,
            volumes: manga.volumes,
            title: manga.title,
            year: manga.year,
        })

        const card = `
            <li class="list-item" id="list-popular-mangas" data-id='${manga.mal_id}'>
                <div class="card">
                    <div class="card-content">
                        ${imageInfo}
                    </div>
                    <div class="card-description">
                        ${titleInfo}
                        ${authorInfo}
                        ${chaptersInfo}
                        ${volumesInfo}
                        ${genresInfo}
                    </div>
                </div>
            </li>
        `

        list.innerHTML += card
    })
}