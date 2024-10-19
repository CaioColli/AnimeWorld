import { generateInformations } from '../../script/utils/renderHelpers.js'

export async function renderAnimeSearchResult(results) {
    const list = document.querySelector('#search-animes-result-list')
    list.innerHTML = ''

    results.forEach(result => {
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
            title: result.title_english || result.title,
            episodes: result.episodes,
            year: result.year,
            image: result.images.jpg.large_image_url,
            genres: result.genres,
            authors: result.authors,
            chapters: result.chapters,
            volumes: result.volumes
        })

        const card = `
            <li class="list-item" id="list-searched-anime" data-id='${result.mal_id}'>
                <a href='/page/dynamicPage/index.html?type=anime&id=${result.mal_id}' target="_blank">
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