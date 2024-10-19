import { carousel } from '../../script/utils/scrollList.js'

export function searchedAnimesItemsDOM() {
    const {calculateScrollPosition, shouldHidePrevButton, setActiveItem } = carousel()

    const list = document.querySelector('#search-animes-result-list')
    const prevButton = document.querySelector('#searched-animes-items-prev-button')
    const nextButton = document.querySelector('#searched-animes-items-next-button')
    
    let currentIndex = 0

    if (list && prevButton && nextButton) {
        const items = document.querySelectorAll('#list-searched-anime')

        function scrollToActiveItem() {
            const activeItem = items[currentIndex]
            const listWidth = list.offsetWidth
            const scrollPosition = calculateScrollPosition(activeItem, listWidth)

            list.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            })  
        }

        function updateButtonVisibility() {
            prevButton.style.display = shouldHidePrevButton(currentIndex) ? 'none' : 'flex'
        }

        function updateActiveItem() {
            setActiveItem(items, currentIndex)
            scrollToActiveItem()
            updateButtonVisibility()
        }

        prevButton.addEventListener('click', () => {
            // Se estiver no primeiro item, volta ao último
            currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
            updateActiveItem()
        })

        nextButton.addEventListener('click', () => {
            // Se estiver no último item, volra ao primeiro
            currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1
            updateActiveItem()
        })

        items.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentIndex = index
                updateActiveItem()
            })
        })

        updateActiveItem()
    } else {
        console.error('Elementos não encontrados para a funcionalidade de carrossel')
    }
}