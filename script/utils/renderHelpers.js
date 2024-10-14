export function generateInformations({
    authors,
    chapters,
    episodes,
    genres,
    image,
    title,
    volumes,
    year
}) {
    const episodesInfo = generateEpisodesInfo(episodes)
    const titleInfo = generateTitle(title)
    const releaseYearInfo = generateReleaseYear(year)
    const genresInfo = generateGenres(genres)
    const authorInfo = generateAuthor(authors)
    const chaptersInfo = generateChapters(chapters)
    const volumesInfo = generateVolumes(volumes)
    const imageInfo = generateImage(image)

    return {
        authorInfo,
        titleInfo,
        chaptersInfo,
        episodesInfo,
        genresInfo,
        imageInfo,
        releaseYearInfo,
        volumesInfo,
    }
}

function generateImage(image, title) {
    return image !== null && image !== undefined ?
        `<img class="card-image" src=${image} alt=${title}></img>` :
        ''
}

function generateTitle(title) {
    return title !== null && title !== undefined ?
        `<h2 class="card-title">${title}</h2>` :
        ''
}

function generateEpisodesInfo(episode) {
    return episode !== null && episode !== undefined ?
        `<span class="card-episodes">Episódios disponíveis: ${episode}</span>` :
        ''
}

function generateReleaseYear(year) {
    return year !== null && year !== undefined ?
        `<span class="card-episodes">Ano de lançamento: ${year}</span>` :
        ''
}

function generateGenres(genres) {
    if (genres && genres.length > 0) {
        const genresInfo = genres.map(genre => genre.name).join(', ')
        return `<span class="card-genres">Gêneros: ${genresInfo}`
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