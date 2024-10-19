import { carousel } from '../../../script/utils/scrollList.js'
import { currentPage, loadNextPage, loadPrevPage } from './renderAllMangas.js'

export function allMangasSlide() {
    const {
        calculateScrollPosition,
        shouldHidePrevButton,
        setActiveItem
    } = carousel()

    const list = document.querySelector('#mangas-list')
    const prevButton = document.querySelector('#mangas-prev-button')
    const nextButton = document.querySelector('#mangas-next-button')

    let currentIndex = 0

    if (list && prevButton && nextButton) {
        const items = document.querySelectorAll('#manga-item')

        function scrollActiveItem() {
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
            scrollActiveItem()
            updateButtonVisibility()
        }

        prevButton.addEventListener('click', () => {
            currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
            updateActiveItem()
        })

        nextButton.addEventListener('click', () => {
            currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1
            updateActiveItem()
        })

        updateActiveItem()
    } else {
        console.error('Elementos não encontrados para a funcinalidade de carrossel')
    }
}

export function allMangasButton() {
    const prevButton = document.querySelector('#prev-page-mangas-button')
    const nextButton = document.querySelector('#next-page-mangas-button')
    const currentValue = document.querySelector('#current-page-mangas')
    const loadingOverlay = document.querySelector('#overlay')  
    const pageContainer = document.querySelector('#all-mangas-container')

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