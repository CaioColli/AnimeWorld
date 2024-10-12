export function generateInformations({ episodes, year, genres, authors, chapters, volumes }) {
    const episodesInfo = generateEpisodesInfo(episodes)
    const releaseYear = generateReleaseYear(year)
    const genresInfo = generateGenres(genres)
    const authorInfo = generateAuthor(authors)
    const chaptersInfo = generateChapters(chapters)
    const volumesInfo = generateVolumes(volumes)

    return {
        episodesInfo,
        releaseYear,
        genresInfo,
        authorInfo,
        chaptersInfo,
        volumesInfo,
    }
}

function generateEpisodesInfo(episode) {
    return episode !== null && episode !== undefined 
        ? `<span class="card-episodes">Episódios disponíveis: ${episode}</span>` 
        : ''
}

function generateReleaseYear(year) {
    return year !== null && year !== undefined 
        ? `<span class="card-episodes">Ano de lançamento: ${year}</span>` 
        : ''
}

function generateGenres(genres) {
    return genres && genres.length > 0
        ? genres.map(genre => genre.name).join(', ')
        : ''
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
    return chapters && chapters > 0
        ? `<span class="card-chapters">Episódios: ${chapters}</span>`
        : ''
}

function generateVolumes(volumes) {
    return volumes && volumes > 0
        ? `<span class="card-volumes">Volumes: ${volumes}</span>`
        : ''  
}