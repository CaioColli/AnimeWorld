import { fetchMangaRecommendation } from '../../script/services/mangaRecommendation.js'

export async function renderMangasRecommendationList() {
   const mangas = await fetchMangaRecommendation() 

   const list = document.querySelector('#mangas-recommendations-list')

   mangas.forEach(manga => {
    manga.entry.forEach(entry => {
        const card = `
            <li class="carousel-list-item" id="list-carousel-mangas-recommendations" data-id='${entry.mal_id}'>
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