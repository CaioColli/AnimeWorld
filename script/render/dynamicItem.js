import {
    generateInformations
} from '../utils/renderHelpers.js'

export async function renderDynamicItem(details, itemType) {
    const container = document.querySelector('#dynamic-item')
    const header = document.querySelector('#dynamic-header')

    if (!details) {
        console.error('Nenhum detalhe sobre o item selecionado!')
        header.style.display = 'none'

        container.innerHTML = `
            <section class="item-not-found">
                <h1 class="item-not-found-title">404</h1>
                <h2 class="item-not-found-subTitle">Não encontramos nenhum dado sobre o item</h2>
                <div class="item-not-found-bg"></div>
                <button class="item-not-found-button">
                    <a class="item-not-found-anchor" href="/index.html">Home</a>
                </button>
            </section>
        `
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
        authorsClass: 'selected-author-info',
        chapters: details.chapters,
        chaptersClass: 'selected-chapters-info',
        episodes: details.episodes,
        episodesClass: 'selected-episodes-info',
        genres: details.genres,
        genresClass: 'selected-genres-info',
        image: details.images.jpg.large_image_url,
        imageClass: 'selected-image',
        volumes: details.volumes,
        volumesClass: 'selected-volumes-info',
        title: details.title,
        titleClass: 'selected-title-info',
        year: details.year,
        yearClass: 'selected-release-year',
        favorites: details.favorites,
        favoritesClass: 'selected-favorites-info',
        //trailerVideo: details.trailer.embed_url,
        trailerVideo: details.trailer ? details.trailer.embed_url : null, // Somente para animes (se disponível)
        trailerVideoClass: 'selected-trailer-video',
        link: details.streaming,
        ulClassName: 'selected-content-header-list',
        liClassName: 'selected-content-header-item',
        itemType
    })

    container.innerHTML = `
        <div class="selected-item-container">
        
            <aside class="selected-side-content">
                <picture>
                    ${imageInfo}
                </picture>

                <div>
                    ${titleInfo}
                </div>
                
                <div class="selected-side-description">
                    ${favoritesInfo}
                    <h3 class="selected-side-description-title">Informações</h3>

                    <ul class="selected-item-content-side-list">
                        ${episodesInfo}
                        ${authorInfo}
                        ${chaptersInfo}
                        ${volumesInfo}
                        ${releaseYearInfo}
                        ${genresInfo}
                    </ul>
                </div>
            </aside>

            <main class="selected-item-content">
                ${linksInfo}

                <section class="selected-trailer-container">
                    ${trailerVideoInfo}
                </section>
            </main>
        </div>
    `
}