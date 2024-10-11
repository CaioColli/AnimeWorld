import { applyButtonVisibility, updateButtonVisibility } from '../utils/scrollButtonVisibility.js'
import { scrollList } from '../utils/scrollList.js'

export function popularAnimesDOM() {
    const list = document.querySelector('#popular-animes-list')
    const prevButton = document.querySelector('#animes-prev-button')
    const nextButton = document.querySelector('#animes-next-button')

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