import { renderDynamicItem } from './renderDynamicItem.js'
import { fetchAnimeById } from '../../../script/services/animeRequest.js'
import { fetchMangaById } from '../../../script/services/mangaRequest.js'

// Função para obter o ID do anime da URL
function getTypeFromUrl() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('type')
}

function getItemFromUrl() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('id')
}

// Função para buscar e logar os detalhes do anime
export async function logItemDetail() {
    const itemType = getTypeFromUrl()
    const itemId = getItemFromUrl()
    const loadingOverlay = document.querySelector('#overlay')

    loadingOverlay.style.display = 'flex'
    
    if (!itemId || !itemType) {
        console.error('Tipo ou ID não encontrado na URL.')
        return
    }

    try {
        let itemDetails

        if (itemType === 'anime') {
            itemDetails = await fetchAnimeById(itemId)
        } else if (itemType === 'manga') {
            itemDetails = await fetchMangaById(itemId)
        }

        console.log('Detalhes do item:', itemDetails)

        loadingOverlay.style.display = 'none'
        renderDynamicItem(itemDetails, itemType)
    } catch (error) {
        console.error('Erro ao buscar anime:', error)
    }
}

// Chame a função para logar os detalhes quando o script é carregado
logItemDetail()

