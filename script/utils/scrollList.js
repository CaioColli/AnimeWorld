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


export function carousel() {
    function calculateScrollPosition(activeItem, listWidth) {
        const itemWidth = activeItem.offsetWidth;
        return activeItem.offsetLeft - (listWidth / 2) + (itemWidth / 2);
    }

    function shouldHidePrevButton(currentIndex) {
        return currentIndex === 0;
    }

    function setActiveItem(items, currentIndex) {
        items.forEach(item => item.classList.remove('active'));
        if (items[currentIndex]) {
            items[currentIndex].classList.add('active');
        }
    }
    
    return {
        calculateScrollPosition,
        shouldHidePrevButton,
        setActiveItem
    }
}