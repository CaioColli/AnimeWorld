export function generateInformations({
    authors,
    authorsClass = 'card-author',
    chapters,
    chaptersClass = 'card-chapters',
    episodes,
    episodesClass = 'card-episodes',
    genres,
    genresClass = 'card-genres',
    image,
    imageClass = 'card-image',
    title,
    titleClass = 'card-title',
    volumes,
    volumesClass = 'card-volumes',
    year,
    yearClass = 'card-release',
    favorites,
    favoritesClass,
    trailerVideo,
    trailerVideoClass,
    link,
    ulClassName,
    liClassName,
    itemType
}) {
    const episodesInfo = generateEpisodesInfo(episodes, episodesClass)
    const titleInfo = generateTitle(title, titleClass)
    const releaseYearInfo = generateReleaseYear(year, yearClass)
    const genresInfo = generateGenres(genres, genresClass)
    const authorInfo = generateAuthor(authors, authorsClass)
    const chaptersInfo = generateChapters(chapters, chaptersClass)
    const volumesInfo = generateVolumes(volumes, volumesClass)
    const imageInfo = generateImage(image, imageClass)
    const favoritesInfo = generateNumberFavorites(favorites, favoritesClass)
    const trailerVideoInfo = itemType === 'anime' ? generateTrailerVideo(trailerVideo, trailerVideoClass) : ''
    const linksInfo = generateLinksUrl(link, ulClassName, liClassName)

    return {
        authorInfo,
        titleInfo,
        chaptersInfo,
        episodesInfo,
        genresInfo,
        imageInfo,
        releaseYearInfo,
        volumesInfo,
        favoritesInfo,
        trailerVideoInfo,
        linksInfo
    }
}

function generateImage(image, className, title) {
    return image !== null && image !== undefined ?
        `<img class=${className} src=${image} alt=${title}></img>` :
        ''
}

function generateTitle(title, className) {
    return title !== null && title !== undefined ?
        `<h2 class=${className}>${title}</h2>` :
        ''
}

function generateEpisodesInfo(episode, className) {
    return episode !== null && episode !== undefined ?
        `<span class=${className}>Episódios disponíveis: ${episode}</span>` :
        ''
}

function generateReleaseYear(year, className) {
    return year !== null && year !== undefined ?
        `<span class=${className}>Ano de lançamento: ${year}</span>` :
        ''
}

function generateGenres(genres, className) {
    if (genres && genres.length > 0) {
        const genresInfo = genres.map(genre => genre.name).join(', ')
        return `<span class=${className}>Gêneros: ${genresInfo}`
    } else {
        return ''
    }
}

function generateAuthor(author, className) {
    if (author && author.length > 0) {
        const authorName = author.map(data => data.name).join(', ')

        if (author.length > 1) {
            return `<span class=${className}>Autores: ${authorName}</span>`
        } else {
            return `<span class=${className}>Autor: ${authorName}</span>`
        }
    } else {
        return ''
    }
}

function generateChapters(chapters, className) {
    return chapters && chapters > 0 ?
        `<span class=${className}>Episódios: ${chapters}</span>` :
        ''
}

function generateVolumes(volumes, className) {
    return volumes && volumes > 0 ?
        `<span class=${className}>Volumes: ${volumes}</span>` :
        ''
}

function generateNumberFavorites(favorite, className) {
    return favorite && favorite > 0 ?
        `<span class=${className}><div class="favorites-icon"></div>${favorite}  </span>` :
        ''
}

function generateTrailerVideo(trailerURL, className) {
    return trailerURL ?
        `
    <section class="selected-trailer-container">
        <section class="selected-trailer-content">
            <h2 class="selected-title-article">Trailer</h2>
            <iframe class="${className}" src="${trailerURL}"allowfullscreen></iframe>
        </section>
    </section>` :
        `
    <section class="selected-trailer-container">
        <section class="selected-trailer-not-found-content">
            <div class="selected-trailer-not-found-message">
                <h2 class="selected-trailer-not-found-message-title">Trailer disponível 😭</h2>
            </div>
            <div class="selected-trailer-not-found"><div>
        </section>
    </section>
        `
}

function generateLinksUrl(links, ulClassName, liClassName) {
    if (Array.isArray(links) && links.length > 0) {
        return `
        <header class="selected-item-content-header">
            <h3 class="selected-item-description-title">Links</h3>

            <ul class="${ulClassName}">
                ${links.map(link => `
                    <li class=${liClassName}>
                        <a class="selected-links-anchor" href="${link.url}" target="_blank">${link.name || link.url}</a>
                    </li>
                `).join('')}
            </ul>
        </header>`
    } else {
        return ''
    }
}
