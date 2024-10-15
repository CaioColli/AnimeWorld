import {
    generateInformations
} from '../utils/renderHelpers.js'

export async function renderDynamicItem(details) {
    if (!details) {
        console.error('Nenhum detalhe sobre o item selecionado!')
        return
    }

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
        authors: details.authors,
        chapters: details.chapters,
        episodes: details.episodes,
        genres: details.genres,
        image: details.images.jpg.large_image_url,
        volumes: details.volumes,
        title: details.title,
        year: details.year,
    })

    const container = document.querySelector('#dynamic-item')

    container.innerHTML = `
        <div class="item-container">
            <aside class="side-content">
                <picture class="side-image">
                    ${imageInfo}
                </picture>

                <div class="side-description">
                    ${titleInfo}
                    ${episodesInfo}
                </div>
            </aside>
        </div>
    `
}