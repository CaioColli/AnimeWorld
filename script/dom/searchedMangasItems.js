import { applyButtonVisibility, updateButtonVisibility } from '../utils/scrollButtonVisibility.js'
import { scrollList } from '../utils/scrollList.js'

export function searchedMangasItemsDOM() {
    const list = document.querySelector('#search-mangas-result-list')
    const prevButton = document.querySelector('#searched-mangas-items-prev-button')
    const nextButton = document.querySelector('#searched-mangas-items-next-button')
    
    prevButton.style.display = 'none'

    if (list && prevButton && nextButton) {
        scrollList(list, prevButton, nextButton)

        list.addEventListener('scroll', () => {
            const visibility = updateButtonVisibility(list)
            applyButtonVisibility(prevButton, nextButton, visibility)
        })
    } else {
        console.error('Elementos não encontrados para a funcionalidade de scroll')
    }
}