export function animesRecommendationsDOM() {
    const prevButton = document.querySelector('#animes-recommendations-prev-button')
    const nextButton = document.querySelector('#animes-recommendations-next-button')
    const carouselList = document.querySelector('#animes-recommendations-list')

    let currentIndex = 0

    if (carouselList && prevButton && nextButton) {
        const items = document.querySelectorAll('.carousel-list-item')

        // Função para centralizar o item ativo no carrossel
        function scrollToActiveItem() {
            const activeItem = items[currentIndex]
            const itemWidth = activeItem.offsetWidth
            const listWidth = carouselList.offsetWidth

            const scrollPosition = activeItem.offsetLeft - (listWidth / 2) + (itemWidth / 2)
            carouselList.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            })
        }

        function updateButtonVisibility() {
            if (currentIndex === 0) {
                prevButton.style.display = 'none'
            } else {
                prevButton.style.display = 'flex'
            }
        }

        // Função para atualizar o item ativo
        function updateActiveItem() {
            items.forEach(item => item.classList.remove('active'))
            if (items[currentIndex]) {
                items[currentIndex].classList.add('active')
            }
            scrollToActiveItem()
            updateButtonVisibility()
        }

        prevButton.addEventListener('click', () => {
            // Se estiver no primeiro item, volta ao último
            if (currentIndex === 0) {
                currentIndex = items.length - 1
            } else {
                currentIndex--
            }
            updateActiveItem()
        })

        nextButton.addEventListener('click', () => {
            // Se estiver no último item, volra ao primeiro
            if (currentIndex === items.length - 1) {
                currentIndex = 0
            } else {
                currentIndex++
            }
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