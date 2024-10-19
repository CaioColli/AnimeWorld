import { fetchAnimesRecommendations } from '../../script/services/animesRecommendations.js'

export async function renderAnimesRecommendationsList() {
    const animes = await fetchAnimesRecommendations()

    const list = document.querySelector('#animes-recommendations-list')

    animes.forEach(anime => {
        anime.entry.forEach(entry => {
            const card = `
                <li class="carousel-list-item" id="list-carousel-animes-recommendations" data-id='${entry.mal_id}'>
                    <div class="carousel-card">
                        <img class="carousel-card-image" src=${entry.images.jpg.large_image_url}></img> 
                        <div class="carousel-card-description">
                            <h2 class="carousel-card-title">${entry.title}</h2>
                        </div>
                    </div>
                </li>
            `

            list.innerHTML += card
        })
    })
}