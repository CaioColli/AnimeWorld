import {
    fetchPopularAnimes
} from '../../script/services/animeRequest.js'
import {
    generateInformations
} from '../../script/utils/renderHelpers.js'

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
            <li class="list-item" id="list-popular-animes" data-id='${anime.mal_id}'>
                <a href='page/dynamicPage/index.html?type=anime&id=${anime.mal_id}' target="_blank">
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
                </a>
            </li>
        `

        list.innerHTML += card
    })
}