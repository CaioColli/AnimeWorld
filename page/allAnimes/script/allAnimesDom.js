import {  currentPage,  loadNextPage, loadPrevPage } from './renderAllAnimes.js'
import { carousel } from '../../../script/utils/scrollList.js'

let currentIndex = 0
let items = []

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

        function updateItems() {
            items = document.querySelectorAll('#animes-item')
            return items
        }

        function scrollToActiveItem() {
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
        currentIndex = 0
        allAnimesSlide()
        pageContainer.style.display = 'flex'
        loadingOverlay.style.display = 'none'
        allAnimesButtons()

        const items = document.querySelectorAll('#animes-item')
        if (items.length > 0) {
            const listWidth = document.querySelector('#animes-list').offsetWidth
            const firstItem = items[0]
            const scrollPosition = (firstItem.offsetLeft - (listWidth / 2) + (firstItem.offsetWidth / 2))
            document.querySelector('#animes-list').scrollTo({
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
        allAnimesSlide()
        pageContainer.style.display = 'flex'
        loadingOverlay.style.display = 'none'
        allAnimesButtons()

        const items = document.querySelectorAll('#animes-item')
        if (items.length > 0) {
            const listWidth = document.querySelector('#animes-list').offsetWidth
            const firstItem = items[0]
            const scrollPosition = (firstItem.offsetLeft - (listWidth / 2) + (firstItem.offsetWidth / 2))
            document.querySelector('#animes-list').scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            })
        }
    }
}