
import { useState } from 'react'
import './buscador.css'


export const Buscador = ({ setBusqueda,agregarCategoria }) => {

    const [valorTemporal, setValorTemporal] = useState('')

    const manejarBusqueda = () => {
        if (valorTemporal.trim()){
            setBusqueda(valorTemporal)
            agregarCategoria(valorTemporal)
            setValorTemporal('')   
            console.log(valorTemporal);

        }
    }

    return (
        <input type="text"
            placeholder='Encuentra tu gif favorito'
            value={valorTemporal}
            onChange={(e) => setValorTemporal(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    manejarBusqueda();
                }
            }}
        />
    )
}