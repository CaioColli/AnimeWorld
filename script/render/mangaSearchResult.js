import { generateInformations } from '../utils/renderHelpers.js'


export async function renderMangaSearchResult(results) {
    const list = document.querySelector('#search-mangas-result-list')
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
            episodes: result.episodes,
            title: result.title_english || result.title,
            image: result.images.jpg.large_image_url,
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
                        ${imageInfo}
                        <div class="card-description">
                            ${titleInfo}
                            ${episodesInfo}
                            ${releaseYearInfo}
                            ${chaptersInfo}
                            ${volumesInfo}
                            ${authorInfo}
                            ${genresInfo}
                        </div>
                    </div>
                </div>
            </li>
        `

        list.innerHTML += card
    })
}