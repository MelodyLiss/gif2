import { useState, useEffect } from 'react';
import './SeccionGif.css';
import { TarjetaGif } from './TarjetaGif';
import { llamadaApi } from '../utils/llamadaApi';


export const SeccionGif = ({busqueda}) => {

    const [gifs, setGifs] = useState([]);

    const eliminarGifs = (id) =>{
        const nuevosGifs = gifs.filter(gif => gif.id !== id)
        setGifs(nuevosGifs);
        console.log(`Gif con id ${id} a sido eliminado`);
    }

    useEffect(() =>{
        const obtenerGifs = async () => {
            const resultado = await llamadaApi(6, busqueda); 
            setGifs(resultado || []); // Prevención si hay error
        };
        obtenerGifs();
    },[busqueda])

    return (
        <section className="seccion-gif">
            <h2>Resultados de la búsqueda</h2>
            <div className="seccion-gif__contenedor">

                {gifs.map(gif =>(
                    <TarjetaGif
                    key={gif.id}
                    titulo={gif.title}
                    img={gif.url}
                    eliminarGifs={() => eliminarGifs(gif.id)}
                    />
                ))}

                
            </div>
            
        </section>
    );
}