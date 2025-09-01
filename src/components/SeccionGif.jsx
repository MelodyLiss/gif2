import { useState, useEffect } from 'react';
import './SeccionGif.css';
import { TarjetaGif } from './TarjetaGif';
import { llamadaApi } from '../utils/llamadaApi';
import { RiDeleteBin5Fill } from "react-icons/ri";


export const SeccionGif = ({busqueda,gifs,offset,actualizarGifs,actualizarOffset,eliminarCategoria}) => {

    const limite =3;

    const eliminarGifs = (id) =>{
        const nuevosGifs = gifs.filter(gif => gif.id !== id)
        actualizarGifs(busqueda,nuevosGifs);
        console.log(`Gif con id ${id} a sido eliminado`);
    }

    const cargarMasGifs = async () => {
        const nuevoOffset = offset + limite; 
        actualizarOffset(busqueda,nuevoOffset);
        const nuevos = await llamadaApi(limite, busqueda, nuevoOffset);
        actualizarGifs(busqueda,[...gifs, ...nuevos]);
    }



    useEffect(() =>{
        const obtenerGifs = async () => {
            actualizarOffset(busqueda,0);
            const resultado = await llamadaApi(limite, busqueda); 
            actualizarGifs(busqueda, resultado || []); // Prevención si hay error
        };
        obtenerGifs();
    },[busqueda])

    return (
        <section className="seccion-gif">
            <div className='nombre__categoria'>
                <h2>Los mejores gifs de <span>"{busqueda}"</span></h2>
                <button onClick={()=> eliminarCategoria(busqueda)} ><RiDeleteBin5Fill/></button>
            </div>
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

            <button className='seccion-gif__boton'
            onClick={cargarMasGifs}>
                Buscar más</button>
            
        </section>
    );
}