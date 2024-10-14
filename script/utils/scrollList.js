export function scrollList(list, prevButton, nextButton) {
    const scrollAmount = 250 // quantidade de pixel que vai rolar a cada clique

    prevButton.addEventListener('click', () => {
        list.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        })
    })

    nextButton.addEventListener('click', () => {
        // Se já estiver no final, volte ao começo
        if (list.scrollLeft + list.clientWidth >= list.scrollWidth) {
            list.scrollTo({
                left: 0, // Volta ao início
                behavior: 'smooth'
            })
        } else {
            list.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            })
        }
    })
}
