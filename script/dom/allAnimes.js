import {
    currentPage,
    loadNextPage,
    loadPrevPage
} from '../render/allAnimes.js'
import {
    carousel
} from '../utils/scrollList.js'

export function allAnimesSlide() {
    const {
        calculateScrollPosition,
        shouldHidePrevButton,
        setActiveItem
    } = carousel()

    const list = document.querySelector('#animes-list')
    const prevButton = document.querySelector('#animes-prev-button')
    const nextButton = document.querySelector('#animes-next-button')

    let currentIndex = 0

    if (list && prevButton && nextButton) {
        const items = document.querySelectorAll('#animes-item')

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

        updateActiveItem()
    } else {
        console.error('Elementos não encontrados para a funcionalidade de carrossel')
    }
}

export function allAnimesButtons() {
    const nextButton = document.querySelector('#next-page-animes-button')
    const prevButton = document.querySelector('#prev-page-animes-button')
    const currentValue = document.querySelector('#current-page-animes')
    const loadingOverlay = document.querySelector('#overlay')  
    const pageContainer = document.querySelector('#all-animes-container')

    if (currentPage === 1) {
        prevButton.style.display = 'none'
        currentValue.style.display = 'none'
    } else {
        prevButton.style.display = 'flex'
        currentValue.style.display = 'flex'
    }

    nextButton.onclick = async () => {
        pageContainer.style.display = 'none'
        loadingOverlay.style.display = 'flex'
        await loadNextPage()
        pageContainer.style.display = 'flex'
        loadingOverlay.style.display = 'none'
        allAnimesButtons()
    }

    prevButton.onclick = async () => {
        pageContainer.style.display = 'none'
        loadingOverlay.style.display = 'flex'
        await loadPrevPage()
        pageContainer.style.display = 'flex'
        loadingOverlay.style.display = 'none'
        allAnimesButtons()
    }
}