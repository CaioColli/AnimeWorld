import { fetchAnimes } from '../services/animeRequest.js'
import { generateInformations } from '../utils/renderHelpers.js'

export async function renderAnimes() {
    const animes = await fetchAnimes()

    const list = document.querySelector('#editor-picks-animes-list')

    animes.forEach(anime => {
        const {
            imageInfo,
            titleInfo,
        } = generateInformations({
            image: anime.images.jpg.large_image_url,
            title: anime.title,
        })

        const card = `
            <li class="list-item" id="list-editor-picks-animes" data-id='${anime.mal_id}'>
                <div class="card">
                    <div class="card-content">
                        ${imageInfo}
                    </div>
                    <div class="card-description">
                        ${titleInfo}
                    </div>
                </div>
            </li>
        `

        list.innerHTML += card
    })
}