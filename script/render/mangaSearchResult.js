import { generateInformations } from '../utils/renderHelpers.js'

export async function renderMangaSearchResult(results) {
    const list = document.querySelector('#search-mangas-result-list')
    list.innerHTML = ''

    results.forEach(result => {
        const {
            episodesInfo,
            releaseYear,
            genresInfo,
            authorInfo,
            chaptersInfo,
            volumesInfo
        } = generateInformations({
            episodes: result.episodes,
            year: result.year,
            genres: result.genres,
            authors: result.authors,
            chapters: result.chapters,
            volumes: result.volumes
        })

        const card = `
            <li class="list-item">
                <div class="card">
                    <div class="card-content">
                        <img class="card-image" src=${result.images.jpg.large_image_url} alt=${result.title_english || result.title}></img>
                        <div class="card-description">
                            <h2 class="card-title">${result.title_english || result.title}</h2> 
                            ${episodesInfo}
                            ${releaseYear}
                            <span class="card-genres">Gêneros: ${genresInfo}</span>
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