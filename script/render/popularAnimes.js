import { fetchPopularAnimes } from '../services/animeRequest.js'
import { generateInformations } from '../utils/renderHelpers.js'

export async function renderPopularAnimesList() {
    const animes = await fetchPopularAnimes()
    
    const list = document.querySelector('#popular-animes-list')

    animes.forEach(anime => {
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
            authors: anime.authors,
            chapters: anime.chapters,
            episodes: anime.episodes,
            genres: anime.genres,
            image: anime.images.jpg.large_image_url,
            volumes: anime.volumes,
            title: anime.title,
            year: anime.year,
        })

        const card = `
            <li class="list-item">
                <div class="card">
                    <div class="card-content">
                        ${imageInfo}
                        <div class="card-description">
                            ${titleInfo}
                            ${episodesInfo}
                            ${releaseYearInfo}
                            ${genresInfo}
                            ${authorInfo}
                            ${chaptersInfo}
                            ${volumesInfo}
                        </div>
                    </div>
                </div>
            </li>
        `

        list.innerHTML += card
    })
}


