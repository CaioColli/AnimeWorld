import { generateInformations } from '../../script/utils/renderHelpers.js'

export async function renderMangaSearchResult(results) {
    const list = document.querySelector('#search-mangas-result-list')
    list.innerHTML = ''

    results.forEach(result => {
        const {
            imageInfo,
            titleInfo
        } = generateInformations({
            title: result.title_english || result.title,
            image: result.images.jpg.large_image_url
        })

        const card = `
            <li class="list-item" id="list-searched-manga" data-id='${result.mal_id}'>
                <a href='/page/dynamicPage/index.html?type=manga&id=${result.mal_id}' target="_blank">
                    <div class="card">
                        <div class="card-content">
                            ${imageInfo}
                            <div class="card-description">
                                ${titleInfo}
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        `

        list.innerHTML += card
    })
}