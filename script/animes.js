import { animesDOM } from './dom/animes.js'
import { renderAnimes } from './render/animes.js'

(async function init() {
    let screenWidth = window.innerWidth
    const loadingOverlay = document.querySelector('#overlay')   
    const allContentItems = document.querySelector('#all-items-container')

    loadingOverlay.style.display = 'flex'
    allContentItems.style.display = 'none'

    await renderAnimes()
    animesDOM()

    loadingOverlay.style.display = 'none'
    if (screenWidth > 768) {
        allContentItems.style.display = 'flex'
    } else {
        allContentItems.style.display = 'block'
    }
})()