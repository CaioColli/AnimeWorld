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
        volumesInfo,
        favoritesInfo,
        trailerVideoInfo,
        linksInfo,
    } = generateInformations({
        authors: details.authors,
        chapters: details.chapters,
        episodes: details.episodes,
        episodesClass: 'selected-episodes-info',
        genres: details.genres,
        genresClass: 'selected-genres-info',
        image: details.images.jpg.large_image_url,
        imageClass: 'selected-image',
        volumes: details.volumes,
        title: details.title,
        titleClass: 'selected-title-info',
        year: details.year,
        yearClass: 'selected-release-year',
        favorites: details.favorites,
        favoritesClass: 'selected-favorites-info',
        trailerVideo: details.trailer.embed_url,
        trailerVideoClass: 'selected-trailer-video',
        link: details.streaming,
        ulClassName: 'selected-content-header-list',
        liClassName: 'selected-content-header-item'
    })

    const container = document.querySelector('#dynamic-item')

    container.innerHTML = `
        <div class="item-container">
        
            <aside class="side-content">
                <picture class="side-image">
                    ${imageInfo}
                </picture>

                <div class="side-title">
                    ${titleInfo}
                </div>
                
                <div class="side-description">
                    ${favoritesInfo}
                    <h3 class="side-description-title">Informações</h3>

                    <ul class="item-content-side-list">
                        <li class="item-content-side-list-item">${episodesInfo}</li>
                        <li class="item-content-side-list-item">${releaseYearInfo}</li>
                        <li class="item-content-side-list-item">${genresInfo}</li>
                    </ul>
                </div>
            </aside>

            <main class="item-content">
                <header class="item-content-header">
                    <h3 class="side-description-title">Links</h3>

                    ${linksInfo}
                </header>

                <section class="trailer-container">
                    ${trailerVideoInfo}
                </section>
            </main>
        </div>
    `
}