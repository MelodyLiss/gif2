

import { useState } from 'react';

import './buscador.css'


export const Buscador = () => {
    const [busqueda, setBusqueda] = useState('');

    const guardarBusqueda = (e) => {
        setBusqueda(e.target.value);
    }
    return (
        <>
        <input type="text" 
        placeholder='Encuentra tu gif favorito'
        value={busqueda}
        onChange={guardarBusqueda}
        />
        
        <p>{busqueda}</p>

        </>
    )
}