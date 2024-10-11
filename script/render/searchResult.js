export async function renderSearchResult(results) {

    const list = document.querySelector('#search-result-list')
    list.innerHTML = ''

    results.forEach(result => {
        const episodesInfo = result.episodes !== null && result.episodes !== undefined
            ? `<p class="card-episodes">Episódios disponíveis: ${result.episodes}</p>`
            : ''

        const genres = result.genres.map(genre => genre.name).join(', ')
        
        const card = `
            <li class="list-item">
                <div class="card">
                    <div class="card-content">
                        <img class="card-image" src=${result.images.jpg.large_image_url} alt=${result.title_english || result.title}></img>
                        <div class="card-description">
                            <h2 class="card-title">${result.title_english || result.title}</h2> 
                            ${episodesInfo}
                            <p class="card-release">Ano de lançamento: ${result.year}</p>

                            <span class="card-genres">Gêneros: ${genres}</span>
                        </div>
                    </div>
                </div>
            </li>
        `

        list.innerHTML += card
    })
}