import { carousel } from '../../script/utils/scrollList.js'

export function animesRecommendationsDOM() {
    const {
        calculateScrollPosition,
        shouldHidePrevButton,
        setActiveItem
    } = carousel()

    const prevButton = document.querySelector('#animes-recommendations-prev-button')
    const nextButton = document.querySelector('#animes-recommendations-next-button')
    const carouselList = document.querySelector('#animes-recommendations-list')

    let currentIndex = 0

    if (carouselList && prevButton && nextButton) {
        const items = document.querySelectorAll('#list-carousel-animes-recommendations')

        // Função para centralizar o item ativo no carrossel
        function scrollToActiveItem() {
            const activeItem = items[currentIndex]
            const listWidth = carouselList.offsetWidth
            const scrollPosition = calculateScrollPosition(activeItem, listWidth)

            carouselList.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            })
        }

        function updateButtonVisibility() {
            prevButton.style.display = shouldHidePrevButton(currentIndex) ? 'none' : 'flex'
        }

        // Função para atualizar o item ativo
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
                if (index === currentIndex) {
                    const animeId = item.dataset.id
                    window.open(`page/dynamicPage/index.html?type=anime&id=${animeId}`, '_blank')
                } else {
                    currentIndex = index
                    updateActiveItem()
                }
            })
        })

        updateActiveItem()
    } else {
        console.error('Elementos não encontrados para a funcionalidade de carrossel')
    }
}