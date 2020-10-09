
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2ignsh9l231ZrpR2dNCE9LNFi6d45moU`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gift = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.fixed_height.url
        }
    })

    return gift;
}