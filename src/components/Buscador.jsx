
import { useState } from 'react'
import './buscador.css'


export const Buscador = ({ setBusqueda }) => {

    const [valorTemporal, setValorTemporal] = useState('')

    return (
        <input type="text"
            placeholder='Encuentra tu gif favorito'
            value={valorTemporal}
            onChange={(e) => setValorTemporal(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && valorTemporal.trim() !== '') {
                    setBusqueda(valorTemporal)
                }
            }}
        />
    )
}