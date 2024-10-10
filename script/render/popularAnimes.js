import { fetchPopularAnimes } from '../services/animeRequest.js'

export async function renderPopularAnimesList() {
    const animes = await fetchPopularAnimes()

    console.log(animes)
    
    const list = document.querySelector('#popular-animes-list')

    animes.forEach(anime => {
        // Verifica se o numero de episodios esta disponivel
        const episodesInfo = anime.episodes !== null && anime.episodes !== undefined
            ? `<p class="card-episodes">Episódios disponíveis: ${anime.episodes}</p>`
            : ''

        // Transforma o array de generos em uma string com o nome dos generos
        const genres = anime.genres.map(genre => genre.name).join(', ')

        const card = `
            <li class="popular-anime-item">
                <div class="card-anime">
                    <div class="card-content">
                        <img class="card-image" src=${anime.images.jpg.large_image_url} alt=${anime.title_english || anime.title}></img>
                        <div class="card-description">
                            <h2 class="card-title">${anime.title_english || anime.title}</h2> 
                            ${episodesInfo}
                            <p class="card-release">Ano de lançamento: ${anime.year}</p>

                            <span class="card-genres">Gêneros do anime: ${genres}</span>
                        </div>
                    </div>
                </div>
            </li>
        `

        list.innerHTML += card
    })
}


