export function scrollList(list, prevButton, nextButton) {
    const scrollAmount = 250; // quantidade de pixel que vai rolar a cada clique

    prevButton.addEventListener('click', () => {
        list.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        list.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}
