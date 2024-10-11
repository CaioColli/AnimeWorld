export async function fetchApi(url, id, query) {
    try {
        let fetchUrl = `https://api.jikan.moe/v4/${url}`

        if (id) {
            fetchUrl += `/${id}`
        } else if (query) {
            fetchUrl += `?q=${encodeURIComponent(query)}&sfw`
        }

        const response = await fetch(fetchUrl)
        const data = await response.json()
        
        return data.data // Retorna os dados, seja uma lista ou um unico valor

    } catch (error) {
        console.error(`Erro ao receber os dados da API: ${error}`)
    }
}