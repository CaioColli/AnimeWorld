let lastFetchTime = 0 // Armazena o último tempo de requisição

export async function fetchApi(url, id, extra) {
    const currentTime = Date.now()
    const timeSinceLastFetch = currentTime - lastFetchTime

    // Se a diferença for menor que 500ms, espera
    if (timeSinceLastFetch < 500) {
        await new Promise(resolve => setTimeout(resolve, 500 - timeSinceLastFetch))
    }

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

        lastFetchTime = Date.now() // Atualiza o tempo da última requisição
        return data.data

    } catch (error) {
        console.error(`Erro ao receber os dados da API: ${error}`)
    }
}
