export async function fetchApi(url, id, extra) {
    try {
        let fetchUrl = `https://api.jikan.moe/v4/${url}`

        if (id) {
            fetchUrl += `/${id}`

            if (extra === 'full') {
                fetchUrl += '/full'
            }
        } else if (extra) {
            fetchUrl += `?q=${encodeURIComponent(extra)}&sfw`
        }

        const response = await fetch(fetchUrl)
        const data = await response.json()
        
        return data.data // Retorna os dados, seja uma lista ou um unico valor

    } catch (error) {
        console.error(`Erro ao receber os dados da API: ${error}`)
    }
}