import { renderDynamicItem } from './render/dynamicItem.js'
import { fetchAnimeById } from './services/animeRequest.js'

// Função para obter o ID do anime da URL
function getAnimeIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('id')
}

// Função para buscar e logar os detalhes do anime
export async function logAnimeDetails() {
    const animeId = getAnimeIdFromUrl()
    
    if (!animeId) {
        console.error('Anime ID não encontrado na URL.')
        return
    }

    try {
        const animeDetails = await fetchAnimeById(animeId)
        console.log('Detalhes do Anime:', animeDetails)
        renderDynamicItem(animeDetails)
    } catch (error) {
        console.error('Erro ao buscar anime:', error)
    }
}

// Chame a função para logar os detalhes quando o script é carregado
logAnimeDetails()

