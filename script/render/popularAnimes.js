import { fetchPopularAnimes } from '../services/animeRequest.js'
import { generateInformations } from '../utils/renderHelpers.js'

export async function renderPopularAnimesList() {
    const animes = await fetchPopularAnimes()
    
    const list = document.querySelector('#popular-animes-list')

    animes.forEach(anime => {
        const {
            episodesInfo,
            releaseYear,
            genresInfo,
            authorInfo,
            chaptersInfo,
            volumesInfo
        } = generateInformations({
            episodes: anime.episodes,
            year: anime.year,
            genres: anime.genres,
            authors: anime.authors,
            chapters: anime.chapters,
            volumes: anime.volumes
        })

        const card = `
            <li class="list-item">
                <div class="card">
                    <div class="card-content">
                        <img class="card-image" src=${anime.images.jpg.large_image_url} alt=${anime.title_english || anime.title}></img>
                        <div class="card-description">
                            <h2 class="card-title">${anime.title_english || anime.title}</h2> 
                            ${episodesInfo}
                            ${releaseYear}
                            <span class="card-genres">Gêneros do anime: ${genresInfo}
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


