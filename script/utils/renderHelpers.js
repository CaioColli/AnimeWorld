export function generateInformations({
    authors,
    chapters,
    episodes,
    episodesClass = 'card-episodes',
    genres,
    genresClass = 'card-genres',
    image,
    imageClass = 'card-image',
    title,
    titleClass = 'card-title',
    volumes,
    year,
    yearClass = 'card-release',
    favorites,
    favoritesClass,
    trailerVideo,
    trailerVideoClass,
    link,
    ulClassName,
    liClassName
}) {
    const episodesInfo = generateEpisodesInfo(episodes, episodesClass)
    const titleInfo = generateTitle(title, titleClass)
    const releaseYearInfo = generateReleaseYear(year, yearClass)
    const genresInfo = generateGenres(genres, genresClass)
    const authorInfo = generateAuthor(authors)
    const chaptersInfo = generateChapters(chapters)
    const volumesInfo = generateVolumes(volumes)
    const imageInfo = generateImage(image, imageClass)
    const favoritesInfo = generateNumberFavorites(favorites, favoritesClass)
    const trailerVideoInfo = generateTrailerVideo(trailerVideo, trailerVideoClass)
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

function generateAuthor(author) {
    if (author && author.length > 0) {
        const authorName = author.map(data => data.name).join(', ')

        if (author.length > 1) {
            return `<span class="card-author">Autores: ${authorName}</span>`
        } else {
            return `<span class="card-author">Autor: ${authorName}</span>`
        }
    } else {
        return ''
    }
}

function generateChapters(chapters) {
    return chapters && chapters > 0 ?
        `<span class="card-chapters">Episódios: ${chapters}</span>` :
        ''
}

function generateVolumes(volumes) {
    return volumes && volumes > 0 ?
        `<span class="card-volumes">Volumes: ${volumes}</span>` :
        ''
}

function generateNumberFavorites(favorite, className) {
    return favorite && favorite > 0 ?
        `<span class=${className}><div class="favorites-icon"></div>${favorite.toLocaleString('pt-BR', 
        {minimumFractionDigits: 2, maximumFractionDigits: 2}
    )}  </span>` :
        ''
}

function generateTrailerVideo(trailerURL, className) {
    return trailerURL ?
        `
    <section class="trailer-content">
        <h2 class="title-article">Trailer</h2>
        <iframe class="${className}" src="${trailerURL}"allowfullscreen></iframe>
    </section>` :
        `
        <section class="trailer-not-found-content">
            <div class="trailer-not-found-message">
                <h2 class="trailer-not-found-message-title">Trailer disponível 😭</h2>
            </div>

            <div class="trailer-not-found"><div>
        </section>
        `
}

function generateLinksUrl(links, ulClassName, liClassName) {
    if (Array.isArray(links) && links.length > 0) {
        return `
        <ul class="${ulClassName}">
            ${links.map(link => `
                <li class=${liClassName}>
                    <a class="links-anchor" href="${link.url}" target="_blank">${link.name || link.url}</a>
                </li>
            `).join('')}
        </ul>`
    } else {
        return ''
    }
}
