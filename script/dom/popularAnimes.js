import {
    scrollList
} from '../utils/scrollList.js'

export function popularAnimesDOM() {
    const list = document.querySelector('#popular-animes-list')
    const prevButton = document.querySelector('#animes-prev-button')
    const nextButton = document.querySelector('#animes-next-button')

    if (list && prevButton && nextButton) {
        scrollList(list, prevButton, nextButton)
    } else {
        console.error('Elementos não encontrados para a funcionalidade de scroll')
    }

}