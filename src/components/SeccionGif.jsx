import { useState, useEffect } from 'react';
import './SeccionGif.css';
import { TarjetaGif } from './TarjetaGif';
import { llamadaApi } from '../utils/llamadaApi';


export const SeccionGif = ({busqueda}) => {

    const [offset, setOffset] = useState(0);
    const [gifs, setGifs] = useState([]);

    const limite =10;

    const eliminarGifs = (id) =>{
        const nuevosGifs = gifs.filter(gif => gif.id !== id)
        setGifs(nuevosGifs);
        console.log(`Gif con id ${id} a sido eliminado`);
    }

    const cargarMasGifs = async () => {

        const nuevoOffset = offset + limite; 
        const nuevosGifs = await llamadaApi(limite, busqueda, nuevoOffset); 
        setGifs([...gifs, ...nuevosGifs]); 
        setOffset(nuevoOffset);
    }



    useEffect(() =>{
        const obtenerGifs = async () => {
            const resultado = await llamadaApi(limite, busqueda); 
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

            <button 
            onClick={cargarMasGifs}>
                Buscar más</button>
            
        </section>
    );
}