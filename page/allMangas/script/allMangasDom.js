import { carousel } from '../../../script/utils/scrollList.js'
import { currentPage, loadNextPage, loadPrevPage } from './renderAllMangas.js'

let currentIndex = 0
let items = []

export function allMangasSlide() {
    const {
        calculateScrollPosition,
        shouldHidePrevButton,
        setActiveItem
    } = carousel()

    const list = document.querySelector('#mangas-list')
    const prevButton = document.querySelector('#mangas-prev-button')
    const nextButton = document.querySelector('#mangas-next-button')

    if (list && prevButton && nextButton) {
        
        function updateItems() {
            items = document.querySelectorAll('#manga-item')
            return items
        }

        function scrollActiveItem() {
            if (items.length === 0) return
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
            updateItems()
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
        currentIndex = 0
        allMangasSlide()
        pageContainer.style.display = 'flex'
        loadingOverlay.style.display = 'none'
        allMangasButton()

        const items = document.querySelectorAll('#manga-item')
        if (items.length > 0) {
            const listWidth = document.querySelector('#mangas-list').offsetWidth
            const firstItem = items[0]
            const scrollPosition = (firstItem.offsetLeft - (listWidth / 2) + (firstItem.offsetWidth / 2))
            document.querySelector('#mangas-list').scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            })
        }
    }

    prevButton.onclick = async () => {
        pageContainer.style.display = 'none'
        loadingOverlay.style.display = 'flex'
        await loadPrevPage()
        currentIndex = 0
        allMangasSlide()
        pageContainer.style.display = 'flex'
        loadingOverlay.style.display = 'none'
        allMangasButton()

        const items = document.querySelectorAll('#manga-item')
        if (items.length > 0) {
            const listWidth = document.querySelector('#mangas-list').offsetWidth
            const firstItem = items[0]
            const scrollPosition = (firstItem.offsetLeft - (listWidth / 2) + (firstItem.offsetWidth / 2))
            document.querySelector('#mangas-list').scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            })
        }
    }
}