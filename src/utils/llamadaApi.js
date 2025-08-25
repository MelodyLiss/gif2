export const llamadaApi = async (limit=3 ,busqueda, offset=0) => {
    const key = "qiNWsEiO1MxNo9kscZYsHZ6XcEuo11k0";
    
    const url = `https://api.giphy.com/v1/stickers/search?api_key=${key}&q=${busqueda}&limit=${limit}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`;

    try {
        const respuesta = await fetch(url);
        const json = await respuesta.json(); 
        const data = json.data;

        // Transformar los datos obtenidos en un formato más manejable
        const gifs = data.map(gif =>({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
        }))

        console.log(gifs); // Aquí puedes ver los GIFs obtenidos
        return gifs; 
    } catch (error) {
        console.error("Error al realizar la llamada a la API:", error);
    }
};
